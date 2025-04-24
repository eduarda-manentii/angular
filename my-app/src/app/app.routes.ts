import { Routes } from '@angular/router';
import { ExPropertyBindingComponent } from './ex-property-binding/ex-property-binding.component';
import { ExTwoWayBindingComponent } from './ex-two-way-binding/ex-two-way-binding.component';
import { ExImcComponent } from './ex-imc/ex-imc.component';
import { ExLimiteComponent } from './ex-limite/ex-limite.component';
import { ExMicroondasComponent } from './ex-microondas/ex-microondas.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgModelComponent } from './diretiva-ng-model/diretiva-ng-model.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { ExGaleriaArteComponent } from './ex-galeria-arte/ex-galeria-arte.component';
import { CpPaiComponent } from './modulo-teste/cp-pai/cp-pai.component';
import { CpPaiComponent as CpPaiComponent2 } from './modulo-teste-2/cp-pai/cp-pai.component';
import { ExPipesComponent } from './ex-pipes/ex-pipes.component';
import { CpAgrupadorComponent } from './md-service/cp-agrupador/cp-agrupador.component';

export const routes: Routes = [
    { path: 'property-binding',          component: ExPropertyBindingComponent },
    { path: 'two-way-binding',           component: ExTwoWayBindingComponent },
    { path: 'imc',                       component: ExImcComponent },
    { path: 'limite',                    component: ExLimiteComponent },
    { path: 'microondas',                component: ExMicroondasComponent },
    { path: 'diretiva-ng-class',         component: DiretivaNgClassComponent },
    { path: 'diretiva-ng-for',           component: DiretivaNgForComponent },
    { path: 'diretiva-ng-if',            component: DiretivaNgIfComponent },
    { path: 'diretiva-ng-model',         component: DiretivaNgModelComponent },
    { path: 'diretiva-ng-style',         component: DiretivaNgStyleComponent },
    { path: 'diretiva-ng-switch',        component: DiretivaNgSwitchComponent },
    { path: 'galeria-arte',              component: ExGaleriaArteComponent },
    { path: 'cp-pai-carro',              component: CpPaiComponent },
    { path: 'cp-pai-sorteador',          component: CpPaiComponent2 },
    { path: 'pipe',                      component: ExPipesComponent },
    { path: 'agrupador',                 component: CpAgrupadorComponent },
];
