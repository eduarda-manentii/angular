import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex-two-way-binding',
  imports: [FormsModule, CommonModule],
  templateUrl: './ex-two-way-binding.component.html',
  styleUrl: './ex-two-way-binding.component.scss'
})
export class ExTwoWayBindingComponent {
  nome: string = '';
  email: string = '';
  dadosDigitados: string = '';

  mostrarDados() {
    this.dadosDigitados = `Nome: ${this.nome} | Email: ${this.email}`;
  }

  limparDados() {
    this.nome = '';
    this.email = '';
    this.dadosDigitados = '';
  }
}
