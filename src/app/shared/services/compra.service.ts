import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json',}),
 };

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  public urlCompras: any = 'http://localhost:8080/compra';
  private storageKey = 'entradasAPagar';

  constructor(private httpClient: HttpClient) { }

  private dataSubject = new Subject<any>();

  setData(data: any) {
    const dataString = JSON.stringify(data);
    localStorage.setItem(this.storageKey, dataString);
    this.dataSubject.next(data);
  }

  removeData() {
    localStorage.removeItem(this.storageKey);
    this.dataSubject.next(null);
  }

  getData() {
    const dataString = localStorage.getItem(this.storageKey);
    if (dataString) {
      const data = JSON.parse(dataString);
      this.dataSubject.next(data);
    }
    return this.dataSubject.asObservable();
  }

  public findAllCompras(): Observable<any>{
    return this.httpClient.get<any>(this.urlCompras);
  }

  public crearCompra(compra: any): Observable<any>{
    return this.httpClient.post<any>(this.urlCompras, compra, httpOptions);
  }
}
