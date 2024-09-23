import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDBZComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  //Todas las declaraciones se van a mostrar en el archivo que se exportará
  declarations: [MainDBZComponent, ListComponent, CharacterComponent],
  //Este componente MainDBZComponent, es el que se muestra al exterior
  exports:[MainDBZComponent],
  //En los imports se encuentran las importanciones que se utilizaran en todos sus hijos modulos
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
