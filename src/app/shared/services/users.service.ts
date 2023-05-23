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
  public urlUsuarios: any = 'http://localhost:8080/usuarios';

  constructor(private httpClient: HttpClient) { }

  public login(body: any): Observable<any>{
    return this.httpClient.post<any>(this.urlUsuarios+'/login', body, httpOptions);
  }

  public register(body: any): Observable<any>{
    return this.httpClient.post<any>(this.urlUsuarios, body, httpOptions);
  }

  public roleToken(jwt: any): Observable<any>{
    let params;

    if(localStorage.getItem('jwt')) {
      params = new HttpHeaders().set('jwt', jwt);
    }

    return this.httpClient.get<any>(this.urlUsuarios+'/userRoleToken', {headers: params});
  }
}
