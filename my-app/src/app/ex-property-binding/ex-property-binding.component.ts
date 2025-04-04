import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-property-binding',
  imports: [],
  templateUrl: './ex-property-binding.component.html',
  styleUrl: './ex-property-binding.component.scss'
})
export class ExPropertyBindingComponent implements OnInit {

  estaDesabilitado: boolean = false;
  imagemAtual: string = 'assets/images/img1';
  ngOnInit(): void {
    setInterval(() => {
      this.estaDesabilitado =!this.estaDesabilitado;
      this.imagemAtual = this.imagemAtual.includes('img1.png') 
      ? 'assets/images/img2.png'
      : 'assets/images/img1.png'
    }, 5000);
  }

}
