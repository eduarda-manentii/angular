import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cp-filho',
  imports: [],
  templateUrl: './cp-filho.component.html',
  styleUrl: './cp-filho.component.scss'
})
export class CpFilhoComponent {
  @Output() public emiteEventoPai = new EventEmitter();

  public sorteiaNumero() {
    let numero = Math.floor(Math.random() * 100 + 1);
    this.emiteEventoPai.emit(numero.toString());
  }
}
