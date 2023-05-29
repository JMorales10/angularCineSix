import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json',}),
 };

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  public urlSalas: any = 'http://localhost:8080/sala';

  constructor(private httpClient: HttpClient) { }

  public findAllSalas(): Observable<any>{
    return this.httpClient.get<any>(this.urlSalas);
  }

  public eliminarSalas(id: any): Observable<any>{
    return this.httpClient.delete<any>(this.urlSalas+'/'+id)
  }
}
