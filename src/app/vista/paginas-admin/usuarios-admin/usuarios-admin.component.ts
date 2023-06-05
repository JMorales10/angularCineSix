import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'src/app/shared/services/users.service';
import { USERS_COLUMNS } from 'src/constant';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';

@Component({
  selector: 'app-usuarios-admin',
  templateUrl: './usuarios-admin.component.html',
  styleUrls: ['./usuarios-admin.component.css']
})
export class UsuariosAdminComponent implements OnInit{

  public usersData: any = [];
  public columns: any = USERS_COLUMNS;

  constructor(private dialog: MatDialog, private userService: UsersService){}

  openDeleteDialog(id: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {user: this.usersData.find((user: any) => user.id === id)},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userService.eliminarUsuarios(result.user.id).subscribe();
      window.location.reload();
    });
  }

  openUpdateDialog(id: any): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: {user: this.usersData.find((user: any) => user.id === id)},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.userService.actualizarUsuarios(result.user).subscribe();
      window.location.reload();
    });
  }

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
