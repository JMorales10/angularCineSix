import { peliculaService } from 'src/app/shared/services/pelicula.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-peliculas',
  templateUrl: './pagina-peliculas.component.html',
  styleUrls: ['./pagina-peliculas.component.css']
})
export class PaginaPeliculasComponent implements OnInit{
  public listPeliculas: any;

  constructor(private filmService: peliculaService){}

  ngOnInit(): void {
    this.findAllPeliculas();
  }

  private findAllPeliculas():void{
    this.filmService.findAllPeliculas().subscribe(
      (data) => {
        this.listPeliculas = data;
      },
      (error) => {
        this.listPeliculas = error;
      }
    );
  }
}
