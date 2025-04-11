import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-class',
  imports: [CommonModule],
  templateUrl: './diretiva-ng-class.component.html',
  styleUrl: './diretiva-ng-class.component.scss'
})
export class DiretivaNgClassComponent implements OnInit {

  public valor: boolean = true;

  ngOnInit(): void {
      setInterval(() => {
        this.valor = !this.valor;
      }, 1500);
  }

}
