import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { USERS_COLUMNS } from 'src/constant';

@Component({
  selector: 'app-usuarios-admin',
  templateUrl: './usuarios-admin.component.html',
  styleUrls: ['./usuarios-admin.component.css']
})
export class UsuariosAdminComponent implements OnInit{

  public usersData: any = [];
  public columns: any = USERS_COLUMNS;

  constructor(private userService: UsersService){}

  ngOnInit(): void {
    this.allUsers();
  }

  private allUsers():void{
    this.userService.allUsers().subscribe(
      (data) => {
        this.usersData = data;
      }
    );
  }
}
