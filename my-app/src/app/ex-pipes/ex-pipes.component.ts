import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvertePipe } from '../pipes/inverte.pipe';

@Component({
  selector: 'app-ex-pipes',
  imports: [CommonModule, FormsModule, InvertePipe],
  templateUrl: './ex-pipes.component.html',
  styleUrl: './ex-pipes.component.scss'
})
export class ExPipesComponent {
  public data: Date = new Date();
  public nome: string = "Fulano de Tal";
  public valor: number = 12345.65;
  public palavra: string = "";
}
