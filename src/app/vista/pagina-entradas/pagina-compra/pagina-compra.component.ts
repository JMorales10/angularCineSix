import { EntradaService } from 'src/app/shared/services/entrada.service';
import { entrada } from 'src/app/shared/interfaces/entrada';

import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-compra',
  templateUrl: './pagina-compra.component.html',
  styleUrls: ['./pagina-compra.component.css']
})
export class PaginaCompraComponent {
  entradas : entrada[]  = [];

  constructor(private entradaService: EntradaService) { }


  upQuantity(entrada : entrada): void{
    // if(entrada.stock > entrada.quantity) {
    //   entrada.quantity ++;
    //   this.entradaService.addToCart(entrada);
    // }
  }

  downQuantity(entrada : entrada): void{
    // if(entrada.quantity > 0) {
    //   entrada.quantity --;
    //   this.entradaService.addToCart(entrada);
    // }
  }

  verifyBeerQuantity(entrada : entrada): void {
    // if(entrada.stock < entrada.quantity) {
    //   alert("No se pueden pedir más de las cervezas que hay en stock");
    //   //entrada.quantity = entrada.stock;
    // }

    // if(entrada.quantity < 0) {
    //   alert("No se pueden pedir menos que 0 cervezas");
    //   entrada.quantity = 0;
    // }
  }

  total(){
    let sum=0;
    this.entradas.forEach(entrada => {
      // sum += entrada.quantity * entrada.price
    });
    return sum;
  }
}
