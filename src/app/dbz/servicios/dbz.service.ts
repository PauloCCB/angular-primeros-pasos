import { Injectable } from '@angular/core';
import {v4 as uuidv4} from 'uuid';

import { Character } from '../interfaces/character.interface';
//Inyección de dependencias
//El objetivo de este servicio es manejar la logica del negocio
// a-service
@Injectable({providedIn: 'root'})

export class DbzService {


  public characters: Character[] = [
    {
      id: uuidv4(),
      name: 'Krillin',
      power: 100
    },
    {
      id: uuidv4(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuidv4(),
      name:'Cell',
      power:300
    }
  ];

  AddNewCharacter(character:Character):void{
    //Con el spread, estoy diciendo que toma todas las propiedadesy agregale el id
    const newCharacter: Character={
      id: uuidv4(), ...character
    };
   this.characters.push(newCharacter);
  }
  deleteCharacterById(id:string){
    this.characters=this.characters.filter(character=> character.id !== id);
  }
}
