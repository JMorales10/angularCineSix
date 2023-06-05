import { HorariosService } from 'src/app/shared/services/horarios.service';
import { Asientos } from './../../shared/interfaces/asiento';
import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaService } from 'src/app/shared/services/sala.service';
import { CompraService } from 'src/app/shared/services/compra.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-pagina-entradas',
  templateUrl: './pagina-entradas.component.html',
  styleUrls: ['./pagina-entradas.component.css']
})
export class PaginaEntradasComponent implements OnInit{

  constructor(private router: Router, private userService: UsersService, private route: ActivatedRoute, private horarioService: HorariosService, private salaService: SalaService, private compraService: CompraService){}

  public ELEMENT_DATA: any = []
  public ocupado : Boolean = false;
  public filaAsientos: any = [];
  public dateFilm: any = [];
  public idPelicula: number = 0;
  public entradas: any = [];
  public dataSource: any;
  public selectedDateFilm: any;
  public compra: any = [];

  ngOnInit(): void {
    this.horarios();
  }

  mySelectHandler(event: any) {
    this.dataSource = []
    this.rellenarAsientos(event)
    this.ELEMENT_DATA = [];
  }

  async rellenarAsientos(filter: any) {
    this.selectedDateFilm = filter;
    const result: any = await this.getEntradas();

    for(const entrada of result) {
      if(moment(entrada.fecha).unix() === moment(filter.date).unix() && entrada.id_pelicula == this.idPelicula && entrada.id_sala == filter.sala.id) {
        this.entradas.push(entrada);
      }
    }

    const columnas = parseInt(filter.sala.capacidad.toString().slice(0,-1)) +2;
    const filas = 10;

    for(let x = 0; x < filas; x++){
      for(let y = 0; y < columnas; y++){
          if(y != 3 && y != 7) {
            for(const entrada of this.entradas) {
              if(entrada.fila === x && entrada.asiento === y) {
                this.ocupado = true;
              }
            }
            const asiento: Asientos = {positionX: x, positionY: y, ocupado: this.ocupado};
            this.filaAsientos.push({asiento: asiento})
            this.ocupado = false;
          } else {
            const asiento: Asientos = {positionX: x, positionY: y, ocupado: 'pasillo'};
            this.filaAsientos.push({asiento: asiento})
          }
      }
      this.ELEMENT_DATA.push(this.filaAsientos)
      this.filaAsientos = [];
    }

    this.dataSource = this.ELEMENT_DATA;
    this.entradas = []
  }

  async horarios() {
    this.route.params
      .subscribe(params => {
        this.idPelicula = params['id'];
      }
    );

    this.horarioService.getHorarios().subscribe(
      async (data) => {
        for(const horario of data) {
          if(horario.id_pelicula == this.idPelicula) {
            let date = moment(horario.horario).format('YYYY-MM-DD HH:mm');
            const result = await this.getSala(horario.id_sala)
            this.dateFilm.push({date: date, sala: result});
          }
        }

        if (this.dateFilm.length === 0) {
          this.router.navigate(['/Home'])
        }
      },
      (error) => {
        console.log(error);
        this.router.navigate(['/Home'])
      }
    );
  }

  async getSala(id: any) {
    return await new Promise((resolve, reject)=>{this.salaService.getSala(id).subscribe((data) => {
      resolve(data)
    })})
  }

  async getEntradas() {
    return await new Promise((resolve, reject) => {
      this.compraService.findAllCompras().subscribe(
        (data) => {
          resolve(data)
      });
    })
  }

  public guardarButaca(item: any) {
    this.compra.push(item);
    return item.asiento.ocupado = true;
  }

  async comprarEntradas() {
    let seleccion: any = [];

    for(const entrada of this.compra) {
      const compra = {
        id_pelicula: this.idPelicula,
        id_sala: this.selectedDateFilm.sala.id,
        fila: entrada.asiento.positionX,
        asiento: entrada.asiento.positionY,
        fecha: new Date(this.selectedDateFilm.date)
      }
      seleccion.push(compra)
    }

    this.compraService.setData(seleccion)

    this.router.navigate(['/compra']);
  }

}
