import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  imports: [],
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.scss'
})
export class TituloComponent implements OnInit {

  public titulo = "Boas vindas";                                                                                            
  
  ngOnInit(): void {
    const hora = 2;
    if(hora < 12 && hora > 6) {
      this.titulo = "Bom dia";
    } else if(hora > 18) {
      this.titulo = "Boa noite";
    } else {
      this.titulo = "Boa noite"
    }
      
  }

}
