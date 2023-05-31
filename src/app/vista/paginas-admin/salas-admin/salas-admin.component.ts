import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SalaService } from 'src/app/shared/services/sala.service';
import { SALAS_COLUMNS } from 'src/constant';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';

@Component({
  selector: 'app-salas-admin',
  templateUrl: './salas-admin.component.html',
  styleUrls: ['./salas-admin.component.css']
})
export class SalasAdminComponent {
  public listSalas: any;
  public columns: any = SALAS_COLUMNS;

  constructor(private dialog: MatDialog, private salaService: SalaService){}

  openDeleteDialog(id: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {sala: this.listSalas.find((sala: any) => sala.id === id)},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.salaService.eliminarSalas(result.sala.id).subscribe();
      window.location.reload();
    });
  }

  openUpdateDialog(id: any): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: {sala: this.listSalas.find((sala: any) => sala.id === id)},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.salaService.actualizarSalas(result.sala).subscribe();
      window.location.reload();
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      data: {sala: {}},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.salaService.crearSala(result.sala).subscribe();
      window.location.reload();
    });
  }

  ngOnInit(): void {
    this.findAllSalas();
  }

  private findAllSalas():void{
    this.salaService.findAllSalas().subscribe(
      (data) => {
        this.listSalas = data;
      }
    );
  }
}
