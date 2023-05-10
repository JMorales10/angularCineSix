import { Component } from '@angular/core';
import { MessageService } from 'src/app/shared/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-contacto',
  templateUrl: './pagina-contacto.component.html',
  styleUrls: ['./pagina-contacto.component.css']
})
export class PaginaContactoComponent {
  constructor(public MessageService: MessageService, private router: Router) {
  }
   contactForm(form: any) {
    this.MessageService.sendMessage(form).subscribe();
    this.router.navigate(["/paginaPrincipal"])
   }


}
