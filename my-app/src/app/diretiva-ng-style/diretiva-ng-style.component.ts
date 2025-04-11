import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-style',
  imports: [CommonModule],
  templateUrl: './diretiva-ng-style.component.html',
  styleUrl: './diretiva-ng-style.component.scss'
})
export class DiretivaNgStyleComponent {

  public largura : number = 100;
  public larguraStr : string = "100px";

  aumenta() {
    this.largura += 50;
    this.larguraStr = this.largura+"px";
  }

  diminui() {
    this.largura -= 50;
    this.larguraStr = this.largura+"px";
  }

  reinicia() {
    this.largura = 100;
    this.larguraStr = this.largura+"px";
  }

}
