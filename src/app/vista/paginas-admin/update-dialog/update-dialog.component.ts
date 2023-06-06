import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { peliculaService } from 'src/app/shared/services/pelicula.service';
import { SalaService } from 'src/app/shared/services/sala.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit{
  public type: any;
  public listPeliculas: any;
  public listSalas: any;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private peliculaService: peliculaService,
    private salaService: SalaService
  ) {}

  async ngOnInit() {
    if(this.data.film) {
      this.type = 'film';
    } else if(this.data.user) {
      this.type = 'user'
    } else if(this.data.sala){
      this.type = 'sala'
    } else {
      this.listPeliculas = await this.getPeliculas();
      this.listSalas = await this.getSalas();
      this.type = 'horario'
    }
  }

  async getPeliculas() {
    return await new Promise((resolve, reject) => {
      this.peliculaService.findAllPeliculas().subscribe(
        (data) => {
          resolve(data)
        }
      );
    })
  }

  async getSalas() {
    return await new Promise((resolve, reject) => {
      this.salaService.findAllSalas().subscribe(
        (data) => {
          resolve(data);
        }
      );
    })
  }

  selectFilm(event: any) {
    const film = this.listPeliculas.find((film: any) => film.id == event);
    this.data.horario.id_pelicula = film;
  }

  selectSala(event: any) {
    const sala = this.listSalas.find((sala: any) => sala.id == event);
    this.data.horario.id_sala = sala;
  }
}
