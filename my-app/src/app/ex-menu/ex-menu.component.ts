import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-ex-menu',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './ex-menu.component.html',
  styleUrl: './ex-menu.component.scss'
})
export class ExMenuComponent {

}
