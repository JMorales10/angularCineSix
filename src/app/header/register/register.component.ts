import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public result: any = false;

  constructor(private userService: UsersService, private router: Router) {}

  async register(form: any) {

    const register: any = {
      nombre: form.fullname,
      correo: form.email,
      password: form.password,
      fecha_nac: form.birthDate,
      rol: "user"
    }

    const login: any = {
      correo: form.email,
      password: form.password
    }

    await this.registerUser(register)

    const resultLogin: any = await this.loginUser(login);

    if(resultLogin.jwt != undefined) {
      localStorage.setItem("jwt", resultLogin.jwt);

      await this.router.navigate(['/Home']);
      location.reload()
    } else {
      this.result = "Ha ocurrido un error";
    }

  }

  async registerUser (register: any) {
    return await new Promise((resolve, reject) => {
      this.userService.register(register).subscribe(
        (data) => {
          resolve(data)
        },
        (error) => {
          resolve(error)
        }
      )
    })
  }

  async loginUser (login: any) {
    return await new Promise ((resolve, reject) => {
      this.userService.login(login).subscribe(
        (data) => {
          resolve(data)
        }
      )
    })
  }

}
