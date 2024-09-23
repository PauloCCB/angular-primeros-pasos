import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'add-dbz-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  //Emitir eventos al padre
  @Output()
  onNewCharacter: EventEmitter<Character>=new EventEmitter();

  public character:Character={
    name:'',
    power:0
  };
  emitCharacter():void{

    console.log(this.character);
    if(this.character.name.length===0) return;

    this.onNewCharacter.emit(this.character);
    this.character={name:'',power:0}
    // this.character.name='';
    // this.character.power=0;
    console.log(this.character)
  }
}

