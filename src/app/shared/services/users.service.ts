import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json',}),
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public urlPeliculas: any = 'http://localhost:8080/usuarios/login';

  constructor(private httpClient: HttpClient) { }

  public login(body: any): Observable<any>{
    return this.httpClient.post<any>(this.urlPeliculas, body, httpOptions);
  }
}
