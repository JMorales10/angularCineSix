import { Component } from '@angular/core';
import { peliculaService } from 'src/app/shared/services/pelicula.service';
import { FILMS_COLUMNS } from 'src/constant';


@Component({
  selector: 'app-peliculas-admin',
  templateUrl: './peliculas-admin.component.html',
  styleUrls: ['./peliculas-admin.component.css']
})
export class PeliculasAdminComponent {
  public listPeliculas: any;
  public columns: any = FILMS_COLUMNS;

  constructor(private filmService: peliculaService){}

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
