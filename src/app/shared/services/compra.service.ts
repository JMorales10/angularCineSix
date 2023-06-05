import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json',}),
 };

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  public urlCompras: any = 'http://localhost:8080/compra';

  constructor(private httpClient: HttpClient) { }

  public findAllCompras(): Observable<any>{
    return this.httpClient.get<any>(this.urlCompras);
  }

  public crearCompra(compra: any): Observable<any>{
    return this.httpClient.post<any>(this.urlCompras, compra, httpOptions);
  }
}
