import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TituloComponent } from './titulo/titulo.component';
import { ExPropertyBindingComponent } from './ex-property-binding/ex-property-binding.component';
import { ExTwoWayBindingComponent } from './ex-two-way-binding/ex-two-way-binding.component';
import { ExImcComponent } from './ex-imc/ex-imc.component';
import { ExLimiteComponent } from './ex-limite/ex-limite.component';
import { ExMenuComponent } from './ex-menu/ex-menu.component';
import { ExMicroondasComponent } from './ex-microondas/ex-microondas.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgModelComponent } from './diretiva-ng-model/diretiva-ng-model.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TituloComponent,
    ExTwoWayBindingComponent,
    ExImcComponent,
    ExLimiteComponent,
    ExMenuComponent,
    ExMicroondasComponent,
    DiretivaNgClassComponent,
    DiretivaNgForComponent,
    DiretivaNgIfComponent,
    DiretivaNgModelComponent,
    DiretivaNgStyleComponent,
    DiretivaNgSwitchComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
