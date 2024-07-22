import { Component } from '@angular/core';
//En este caso , existe el ciclo de cambios
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name:string ='Ironman';
  public age: number=45;

  //Los metodos se retornan como valores
  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  HeroDescripcion():string{
    return `${this.name} - ${this.age}`;
  }
  changeHero():void{
    this.name='Spider-Man';
  }
  changeAge():void{
    this.age=35;
  }
  resetForm():void{
    this.name='Ironman';
    this.age=45;
  }
}
