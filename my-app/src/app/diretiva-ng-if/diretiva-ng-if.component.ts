import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-if',
  imports: [CommonModule],
  templateUrl: './diretiva-ng-if.component.html',
  styleUrl: './diretiva-ng-if.component.scss'
})
export class DiretivaNgIfComponent {

  containerAmarelo: boolean = false;
  containerVermelho: boolean = false;

  public clickAmarelo() {
    this.containerAmarelo = !this.containerAmarelo;
  }

  public clickVermelho() {
    this.containerVermelho = !this.containerVermelho;
  }

}
