import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TituloComponent } from './titulo/titulo.component';
import { ExPropertyBindingComponent } from './ex-property-binding/ex-property-binding.component';
import { ExTwoWayBindingComponent } from './ex-two-way-binding/ex-two-way-binding.component';
import { ExImcComponent } from './ex-imc/ex-imc.component';
import { ExLimiteComponent } from './ex-limite/ex-limite.component';
import { ExMenuComponent } from './ex-menu/ex-menu.component';
import { ExMicroondasComponent } from './ex-microondas/ex-microondas.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TituloComponent,
    ExTwoWayBindingComponent,
    ExImcComponent,
    ExLimiteComponent,
    ExMenuComponent,
    ExMicroondasComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
