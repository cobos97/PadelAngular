import { MensajesComponent } from './componentes/mensajes/mensajes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RegistroComponent } from './componentes/login/registro/registro.component';
import { LoginComponent } from './componentes/login/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'principal',  pathMatch: 'full' },
  {path: "noticias", component: NoticiasComponent},
  {path: "principal", component: PrincipalComponent},
  {path: "registro", component: RegistroComponent},
  {path: "mensajes", component: MensajesComponent},
  {path: "login", component: LoginComponent},
  {path: "**", component: PrincipalComponent}//TODO: Crear y cambiar por pagina 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
