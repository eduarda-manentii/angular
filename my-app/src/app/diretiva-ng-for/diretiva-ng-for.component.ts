import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  imports: [CommonModule],
  templateUrl: './diretiva-ng-for.component.html',
  styleUrl: './diretiva-ng-for.component.scss'
})
export class DiretivaNgForComponent {
  contador: number = 1;
  nomeSelecionado: string = "";
  idadeSelecionada: number = 0;

  public listaPessoas: any = [];

  public addPessoa() {
    this.listaPessoas.push(
      { nome: 'Pessoa ' + this.contador,
        idade: this.contador + 30
      });
      this.contador++;
      this.nomeSelecionado = '';
  }

  public removerPessoa(pessoa: any) {
    this.listaPessoas = this.listaPessoas.filter((p: any) => p !== pessoa);
    this.nomeSelecionado = '';
  }

  public clickPessoa(p: any) {
    this.nomeSelecionado = p.nome;
    this.idadeSelecionada = p.idade;
  }

}
