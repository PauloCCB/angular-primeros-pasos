//Angular component me permite crear componentes
//Cuando creo un componente necesita ser parte de un modulo
//En este caso solo tenemos un modulo, que es el app.module.ts
import { Component } from '@angular/core';

//Poner component indica es sera utilizado como un componente
// para crear un componente "a- component usando la creacion de snippets"
@Component({
  //Selector indica como quiero llamar a mi componente en el HTML
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <hr />
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>
  `,
})
export class CounterComponent {
  public title: string = 'Hola mundo';
  public counter = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  decreaseBy(value: number): void {
    this.counter = this.counter - value;
  }
  reset(): void {
    this.counter = 10;
  }
}
