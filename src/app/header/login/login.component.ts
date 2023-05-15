import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/interfaces/usuario';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public loginUser: any;

  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.login();
  }

  public body: any = {
    correo: "jesus@gmail.com",
    password: "1234"
  }

  private login():void{
    this.userService.login(this.body).subscribe(
      (data) => {
        this.loginUser = data;
      },
      (error) => {
        this.loginUser = error;
      }
    );
  }
}
