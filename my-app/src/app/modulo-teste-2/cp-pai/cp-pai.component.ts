import { Component } from '@angular/core';
import { CpFilhoComponent } from '../cp-filho/cp-filho.component';

@Component({
  selector: 'app-cp-pai',
  imports: [CpFilhoComponent],
  templateUrl: './cp-pai.component.html',
  styleUrl: './cp-pai.component.scss'
})
export class CpPaiComponent {
  public numeroSorteado: number = 0;

  public recebeNumero(nr: number) {
    this.numeroSorteado = nr;
  }
  
}
