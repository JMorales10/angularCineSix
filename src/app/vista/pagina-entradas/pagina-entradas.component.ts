import { Asientos } from './../../shared/interfaces/asiento';
import { Component } from '@angular/core';

let ELEMENT_DATA: any = []
let ocupado : Boolean = true;
let filaAsientos: any = [];

  for(let x = 0; x < 10; x++){
    for(let y = 0; y < 10; y++){
      if(y != 2 && y != 7) {
        x % 2 == 0 ? ocupado = true : ocupado = false
        const asiento: Asientos = {positionX: x, positionY: y, ocupado: ocupado};
        filaAsientos.push({asiento: asiento, fila: x})
      } else {
        const asiento: Asientos = {positionX: x, positionY: y, ocupado: 'pasillo'};
        filaAsientos.push({asiento: asiento, fila: x})
      }

    }
    ELEMENT_DATA.push(filaAsientos)
    filaAsientos = []
  }

@Component({
  selector: 'app-pagina-entradas',
  templateUrl: './pagina-entradas.component.html',
  styleUrls: ['./pagina-entradas.component.css']
})
export class PaginaEntradasComponent {

  displayedColumns: string[] = ['ocupado'];
  dataSource = ELEMENT_DATA;

}
