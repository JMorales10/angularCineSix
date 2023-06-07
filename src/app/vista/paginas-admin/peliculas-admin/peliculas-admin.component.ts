import { Component } from '@angular/core';
import { peliculaService } from 'src/app/shared/services/pelicula.service';
import { FILMS_COLUMNS } from 'src/app/constant';
import {MatDialog} from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';


@Component({
  selector: 'app-peliculas-admin',
  templateUrl: './peliculas-admin.component.html',
  styleUrls: ['./peliculas-admin.component.css']
})
export class PeliculasAdminComponent {
  public listPeliculas: any;
  public columns: any = FILMS_COLUMNS;

  constructor(private dialog: MatDialog, private filmService: peliculaService, private router: Router){}

  openDeleteDialog(id: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {film: this.listPeliculas.find((film: any) => film.id === id)},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.filmService.eliminarPeliculas(result.film.id).subscribe();
      window.location.reload();
    });
  }

  openUpdateDialog(id: any): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: {film: this.listPeliculas.find((film: any) => film.id === id)},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.filmService.actualizarPelicula(result.film).subscribe();
      window.location.reload();
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      data: {film: {}},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.filmService.crearPelicula(result.film).subscribe();
      window.location.reload();
    });
  }

  ngOnInit(): void {
    this.findAllPeliculas();
  }

  private findAllPeliculas():void{
    this.filmService.findAllPeliculas().subscribe(
      (data) => {
        this.listPeliculas = data;
      }
    );
  }
}
