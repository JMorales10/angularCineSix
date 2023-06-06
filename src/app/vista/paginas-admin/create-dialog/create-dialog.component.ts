import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { peliculaService } from 'src/app/shared/services/pelicula.service';
import { SalaService } from 'src/app/shared/services/sala.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit{
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
    } else if(this.data.horario) {
      this.listPeliculas = await this.getPeliculas();
      this.listSalas = await this.getSalas();
      this.type = 'horario'
    } else {
      this.type = 'sala'
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
}
