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

  public register(form: any):void{

    const register: any = {
      nombre: form.fullname,
      correo: form.email,
      password: form.password,
      fechaNac: form.birthDate,
      rol: "user"
    }

    const login: any = {
      correo: form.email,
      password: form.password
    }

    this.userService.register(register).subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.log(error)
      }
    )

    this.userService.login(login).subscribe(
      (data) => {
        if(data.jwt != undefined) {
          localStorage.setItem("jwt", data.jwt);
        } else {
          this.result = "Ha ocurrido un error";
        }
      },
      (error) => {
        this.result = "Ha ocurrido un error";
        console.log(error)
      }
    ).add(async()=>{
      await this.router.navigate(['/paginaPrincipal']);
      location.reload();
    });
  }

}
