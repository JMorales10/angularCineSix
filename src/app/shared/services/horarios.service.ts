import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json',}),
};

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  public urlHorarios: any = 'http://localhost:8080/horarios';

  constructor(private httpClient: HttpClient) { }

  public getHorarios(): Observable<any>{
    return this.httpClient.get<any>(this.urlHorarios);
  }

  public eliminarHorario(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.urlHorarios+'/'+id, httpOptions)
  }

  public actualizarHorario(horario: any): Observable<any>{
    return this.httpClient.put<any>(this.urlHorarios+'/'+horario.id, horario, httpOptions)
  }

  public crearHorario(horario: any): Observable<any>{
    return this.httpClient.post<any>(this.urlHorarios, horario, httpOptions)
  }
}
