import { Component, Input } from '@angular/core';
import { CpFilhoComponent } from '../cp-filho/cp-filho.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cp-pai',
  imports: [CpFilhoComponent, FormsModule],
  templateUrl: './cp-pai.component.html',
  styleUrl: './cp-pai.component.scss'
})
export class CpPaiComponent {
 
  public carro = {
    marca: '',
    ano: 0,
    cor: ''
  }
  
}
