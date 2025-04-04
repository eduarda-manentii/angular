import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex-limite',
  imports: [FormsModule],
  templateUrl: './ex-limite.component.html',
  styleUrl: './ex-limite.component.scss'
})
export class ExLimiteComponent {
  limite: number = 0;
  numeroAtual: number = 0;

  adicionarNumero() {
    this.numeroAtual += 1;
  }

  removerNumero() {
    this.numeroAtual -= 1;
  }

}
