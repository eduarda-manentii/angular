import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex-imc',
  imports: [FormsModule, CommonModule],
  templateUrl: './ex-imc.component.html',
  styleUrl: './ex-imc.component.scss'
})
export class ExImcComponent {
  peso: string = '';
  altura: string = '';
  imcNumber: number = 0;
  imc: string = '';
  imagemAtual: string = '';
  condition: boolean = false;

  mostrarDados() {
    if(this.peso == '' || this.altura == '') return alert('Todos os campos são obrigatórios.');
    const imc = ( parseFloat(this.peso) / (parseFloat(this.altura) * parseFloat(this.altura))).toFixed(2);
    this.imcNumber = parseFloat(imc);
    this.imc = `IMC: ${imc}`;
    this.verificarImc();
    this.condition = true;
  }

  limparDados() {
    this.peso = '';
    this.altura = '';
    this.condition = false;
    this.imc = '';
  }

  verificarImc() {
    if(this.imcNumber < 18) {
      this.imagemAtual = 'assets/images/peso1.png';
    } else if(this.imcNumber >= 18.6 && this.imcNumber <= 24.9) {
      this.imagemAtual = 'assets/images/peso2.png';
    } else if(this.imcNumber >= 25 && this.imcNumber <= 29.9) {
      this.imagemAtual = 'assets/images/peso3.png';
    } else if(this.imcNumber >= 30 && this.imcNumber <= 34.9) {
      this.imagemAtual = 'assets/images/peso4.png';
    } else if(this.imcNumber >= 35 && this.imcNumber <= 39.9) {
      this.imagemAtual = 'assets/images/peso5.png';
    } else if(this.imcNumber >= 40) {
      this.imagemAtual = 'assets/images/peso6.png';
    }
  }
}