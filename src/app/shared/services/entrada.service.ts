import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json',}),
 };

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  public urlEntradas: any = 'http://localhost:8080/entrada';

  constructor(private httpClient: HttpClient) { }

  public findAllEntradas(): Observable<any>{
    return this.httpClient.get<any>(this.urlEntradas);
  }

  public createEntrada(entrada: any): Observable<any>{
    return this.httpClient.post<any>(this.urlEntradas, entrada, httpOptions);
  }
}
