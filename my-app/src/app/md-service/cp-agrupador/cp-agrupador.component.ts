import { Component } from '@angular/core';
import { CpAComponent } from '../cp-a/cp-a.component';
import { CpBComponent } from '../cp-b/cp-b.component';

@Component({
  selector: 'app-cp-agrupador',
  imports: [CpAComponent, CpBComponent],
  templateUrl: './cp-agrupador.component.html',
  styleUrl: './cp-agrupador.component.scss'
})
export class CpAgrupadorComponent {

}
