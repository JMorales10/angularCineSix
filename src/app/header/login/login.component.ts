import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/interfaces/usuario';
import { UsersService } from 'src/app/shared/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  public result: any = false;

  constructor(private userService: UsersService, private router: Router) {}

  public login(form: any):void{

    const body: any = {
      correo: form.email,
      password: form.password
    }

    this.userService.login(body).subscribe(
      (data) => {
        if(data.jwt != undefined) {
          localStorage.setItem("jwt", data.jwt);
        } else {
          this.result = "Usuario o contraseña son incorrectos";
        }
      },
      (error) => {
        this.result = "Ha ocurrido un error";
        console.log(error)
      }
    ).add(async()=>{
      await this.router.navigate(['/Home']);
      location.reload();
    });
  }
}
