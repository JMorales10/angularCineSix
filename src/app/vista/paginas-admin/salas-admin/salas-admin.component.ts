import { Component } from '@angular/core';
import { SalaService } from 'src/app/shared/services/sala.service';
import { SALAS_COLUMNS } from 'src/constant';

@Component({
  selector: 'app-salas-admin',
  templateUrl: './salas-admin.component.html',
  styleUrls: ['./salas-admin.component.css']
})
export class SalasAdminComponent {
  public listSalas: any;
  public columns: any = SALAS_COLUMNS;

  constructor(private salaService: SalaService){}

  ngOnInit(): void {
    this.findAllSalas();
  }

  private findAllSalas():void{
    this.salaService.findAllSalas().subscribe(
      (data) => {
        this.listSalas = data;
      }
    );
  }
}
