import { Routes } from '@angular/router';
import { ExPropertyBindingComponent } from './ex-property-binding/ex-property-binding.component';
import { ExTwoWayBindingComponent } from './ex-two-way-binding/ex-two-way-binding.component';
import { ExImcComponent } from './ex-imc/ex-imc.component';
import { ExLimiteComponent } from './ex-limite/ex-limite.component';

export const routes: Routes = [
    {
        path: 'property-binding',
        component: ExPropertyBindingComponent
    },
    {
        path: 'two-way-binding',
        component: ExTwoWayBindingComponent
    },
    {
        path: 'imc',
        component: ExImcComponent
    },
    {
        path: 'limite',
        component: ExLimiteComponent
    }
];
