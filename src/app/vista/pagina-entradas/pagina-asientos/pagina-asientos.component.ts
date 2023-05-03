import { Component } from '@angular/core';

export interface Asientos {
  positionX: number;
  positionY: number;
  ocupado: Boolean;
}

let ELEMENT_DATA: any = []
let ocupado : Boolean = true;
let filaAsientos: any = [];

  for(let x = 0; x < 10; x++){
    for(let y = 0; y < 10; y++){
      x % 2 == 0 ? ocupado = true : ocupado = false
      console.log(ocupado)
      const asiento: Asientos = {positionX: x, positionY: y, ocupado: ocupado};
      filaAsientos.push({asiento: asiento, fila: x})
    }
    ELEMENT_DATA.push(filaAsientos)
    filaAsientos = []
  }

  console.log(ELEMENT_DATA)

@Component({
  selector: 'app-pagina-asientos',
  templateUrl: './pagina-asientos.component.html',
  styleUrls: ['./pagina-asientos.component.css']
})

export class PaginaAsientosComponent {

  displayedColumns: string[] = ['ocupado'];
  dataSource = ELEMENT_DATA;

}
