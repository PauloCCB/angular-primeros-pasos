import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //Con el input puedo mandar informacion del padre al hijo
  //en este caso el characterList. La property
  //va a recibir una property de tipo Character
  @Input()
  public characterList:Character[]=[

  ]

  @Output()
  public onDelete:EventEmitter<string>=new EventEmitter();

  onDeleleteCharacter(id?:string):void{
    if(!id) return;
    //Emitir el ID del personaje
    console.log(id)
    this.onDelete.emit(id);
  }
}
