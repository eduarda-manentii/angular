import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExemploServiceService {
  public lista: Array<string> = [];
  public listaAtualizada = new Subject<string[]>();

  public adiciona(valor: string) {
    this.lista.push(valor);
    this.listaAtualizada.next([...this.lista]);
  }
}
