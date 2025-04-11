import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretiva-ng-switch',
  imports: [CommonModule, FormsModule],
  templateUrl: './diretiva-ng-switch.component.html',
  styleUrl: './diretiva-ng-switch.component.scss'
})
export class DiretivaNgSwitchComponent {
  public valor: number = 1;

}
