import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CounterModule } from './counter/counter.module';
import { HeroModuleComponent } from './heroes/hero.module';
import { MainDBZComponent } from './dbz/pages/main-page.component';
import { DbzModule } from './dbz/dbz.module';



//Este es el modulo que contiene a varios componentes
@NgModule({
  declarations: [
    AppComponent
  ],
  //Aca ponlo los modulos que se importaran
  imports: [
    BrowserModule,
    CounterModule,
    HeroModuleComponent,
    AppRoutingModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
