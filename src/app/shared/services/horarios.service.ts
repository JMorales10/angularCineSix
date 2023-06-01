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
}
