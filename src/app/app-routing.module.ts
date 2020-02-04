import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { PrincipalComponent } from './componentes/principal/principal.component';


const routes: Routes = [
  { path: '', redirectTo: 'principal',  pathMatch: 'full' },
  {path: "noticias", component: NoticiasComponent},
  {path: "principal", component: PrincipalComponent},
  {path: "**", component: PrincipalComponent}//TODO: Crear y cambiar por pagina 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
