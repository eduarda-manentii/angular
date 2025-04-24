import { Component } from '@angular/core';
import { ExemploServiceService } from '../services/exemplo-service.service';

@Component({
  selector: 'app-cp-a',
  imports: [],
  templateUrl: './cp-a.component.html',
  styleUrl: './cp-a.component.scss'
})
export class CpAComponent {

  public qt:number = 0;

  constructor(private service: ExemploServiceService) {
    this.service.listaAtualizada.subscribe(lista => { 
      this.qt = lista.length;
    });
  }

  public addItem(valor: string) {
    return this.service.adiciona(valor);
  }
  
}
