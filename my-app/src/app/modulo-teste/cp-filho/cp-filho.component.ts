import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cp-filho',
  imports: [],
  templateUrl: './cp-filho.component.html',
  styleUrl: './cp-filho.component.scss'
})
export class CpFilhoComponent {
  @Input() public carroFilho: any;
}
