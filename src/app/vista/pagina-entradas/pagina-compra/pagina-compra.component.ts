import { SalaService } from './../../../shared/services/sala.service';
import { now } from 'moment';
import { peliculaService } from './../../../shared/services/pelicula.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CompraService } from 'src/app/shared/services/compra.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { PRECIO } from 'src/constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-compra',
  templateUrl: './pagina-compra.component.html',
  styleUrls: ['./pagina-compra.component.css']
})
export class PaginaCompraComponent implements OnInit, AfterViewInit{

  public precio: number = PRECIO;
  public compras: any;
  public idUser: any;
  public entradasAPagar: any = [];
  public dataLoaded: boolean =  false
  public precioTotal: number = 0;

  constructor(private salaService: SalaService, private compraService: CompraService, private userService: UsersService, private peliculaService: peliculaService, private router: Router) { }

  async ngOnInit() {
    this.idUser = await this.getUserId();
    this.getEntradas()
  }

  ngAfterViewInit(): void {
    if (this.dataLoaded) {
      return;
    }
    this.getEntradas();
  }

  async getEntradas() {

    const result: any = await this.getSeleccion();
    for(const entrada of result) {
      if(this.idUser.id == entrada.id) {
        entrada.id_pelicula = await this.getPelicula(entrada.id_pelicula)
        entrada.id_sala = await this.getSala(entrada.id_sala)
        this.entradasAPagar.push(entrada);
      }
    }

    this.precioTotal = this.entradasAPagar.length * this.precio;
    this.dataLoaded = true;
  }



  async getUserId() {
    return await new Promise((resolve, reject) => {
      this.userService.roleToken(localStorage.getItem('jwt')).subscribe(
        (data: any) => {
          if(data.error) {
            localStorage.removeItem('jwt')
          }
          resolve(data)
        }
      )
    })
  }

  async getSeleccion() {
    return await new Promise((resolve, reject) => {
      this.compraService.getData().subscribe((data) => {
        resolve(data)
      },
      (error) => {
        console.log(error)
      });
    })
  }

  async getCompras() {
    return await new Promise((resolve, reject) => {
      this.compraService.findAllCompras().subscribe((data) => {
        resolve(data)
      })
    })
  }

  async getPelicula(id: number) {
    return await new Promise((resolve, reject) => {
      this.peliculaService.findPelicula(id).subscribe((data) => {
        resolve(data)
      })
    })
  }

  async getSala(id:number) {
    return await new Promise((resolve, reject) => {
      this.salaService.getSala(id).subscribe((data) => {
        resolve(data)
      })
    })
  }

  public comprarEntradas() {

    for (const entrada of this.entradasAPagar) {
      const createEntrada = {
        id_usuario: this.idUser,
        id_pelicula: entrada.id_pelicula.id,
        id_sala: entrada.id_sala.id,
        fila: entrada.fila,
        fecha_compra: entrada.fecha,
        asiento: entrada.asiento,
        precio: this.precio
      }

      this.compraService.crearCompra(createEntrada).subscribe();

    }

    this.compraService.removeData();
    this.router.navigate(['/Home'])
  }
}
