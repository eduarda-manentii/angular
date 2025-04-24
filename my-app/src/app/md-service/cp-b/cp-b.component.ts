import { Component } from '@angular/core';
import { ExemploServiceService } from '../services/exemplo-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cp-b',
  imports: [CommonModule],
  templateUrl: './cp-b.component.html',
  styleUrl: './cp-b.component.scss'
})
export class CpBComponent {
  public lista: Array<string> = [];

  constructor(private service: ExemploServiceService) {
    this.lista = this.service.lista;
    this.service.listaAtualizada.subscribe(listaAtualizada => {
      this.lista = listaAtualizada;
    })
  }

}
