import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';

import * as $ from 'jquery';
import { NoticiasService } from './servicios/noticias.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    PrincipalComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NoticiasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
