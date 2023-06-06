import { HorariosService } from './../../../shared/services/horarios.service';
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
import { HORARIOS_COLUMNS } from 'src/constant';
import { peliculaService } from 'src/app/shared/services/pelicula.service';
import { SalaService } from 'src/app/shared/services/sala.service';
import * as moment from 'moment';

@Component({
  selector: 'app-horarios-admin',
  templateUrl: './horarios-admin.component.html',
  styleUrls: ['./horarios-admin.component.css']
})
export class HorariosAdminComponent {
  public listHorarios: any;
  public columns: any = HORARIOS_COLUMNS;

  constructor(private dialog: MatDialog, private horariosService: HorariosService, private router: Router, private peliculaService: peliculaService, private salaService: SalaService){}

  openDeleteDialog(id: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {horario: this.listHorarios.find((horario: any) => horario.id === id)},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.horariosService.eliminarHorario(result.horario.id).subscribe();
      window.location.reload();
    });
  }

  openUpdateDialog(id: any): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: {horario: this.listHorarios.find((horario: any) => horario.id === id)},
    });

    dialogRef.afterClosed().subscribe(result => {
      const horario = {
        id: result.horario.id,
        horario: moment(result.horario.horario),
        id_pelicula: result.horario.id_pelicula.id,
        id_sala: result.horario.id_sala.id
      }
      this.horariosService.actualizarHorario(horario).subscribe();
      window.location.reload();
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      data: {horario: {}},
    });

    dialogRef.afterClosed().subscribe(result => {
      result.horario.horario = moment(result.horario.horario)
      this.horariosService.crearHorario(result.horario).subscribe();
      window.location.reload();
    });
  }

  async ngOnInit() {
    this.listHorarios = await this.findAllPeliculas();

    for(const horario of this.listHorarios) {
      horario.id_sala = await this.getSala(horario.id_sala);
      horario.id_pelicula = await this.getPelicula(horario.id_pelicula);
      horario.horario = moment(horario.horario).format('YYYY-MM-DD HH:mm');
    }
  }

  async findAllPeliculas(){
    return await new Promise((resolve, reject) => {
      this.horariosService.getHorarios().subscribe(
        (data) => {
          resolve(data)
        }
      );
    })
  }

  async getPelicula(id: number) {
    return await new Promise((resolve, reject) => {
      this.peliculaService.findPelicula(id).subscribe((data) => {
        resolve(data)
      })
    })
  }

  async getSala(id:number) {
    return await new Promise((resolve, reject) => {
      this.salaService.getSala(id).subscribe((data) => {
        resolve(data)
      })
    })
  }
}
