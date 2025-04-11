import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-galeria-arte',
  imports: [CommonModule],
  templateUrl: './ex-galeria-arte.component.html',
  styleUrl: './ex-galeria-arte.component.scss'
})
export class ExGaleriaArteComponent {
  public categoria: string = '';
  public imagensRomance: any = ['assets/images/romance1.jpg', 'assets/images/romance2.jpg', 'assets/images/romance3.jpg', 'assets/images/romance4.jpg']
  public imagensFantasia: any = ['assets/images/fantasia1.jpg', 'assets/images/fantasia2.jpg', 'assets/images/fantasia3.jpg', 'assets/images/fantasia4.jpg']
  public imagensDistopia: any = ['assets/images/distopia1.jpg', 'assets/images/distopia2.jpg', 'assets/images/distopia3.jpg', 'assets/images/distopia4.jpg']

  public escolherGenero(genero: string) {
    this.categoria = genero;
  }

}
