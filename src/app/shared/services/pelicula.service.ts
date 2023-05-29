import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json',}),
 };

@Injectable({
  providedIn: 'root'
})
export class peliculaService {
  public urlPeliculas: any = 'http://localhost:8080/pelicula';

  constructor(private httpClient: HttpClient) { }

  public findAllPeliculas(): Observable<any>{
    return this.httpClient.get<any>(this.urlPeliculas);
  }

  public eliminarPeliculas(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.urlPeliculas+'/'+id)
  }
}
