import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AcercaDeMiComponent } from './pages/acerca-de-mi/acerca-de-mi.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { SobremiComponent } from './pages/sobremi/sobremi.component';

const routes: Routes = [


  {
    path:'',component:AppComponent,
  }
  ,
  {
    path:'acercademi',component:AcercaDeMiComponent

  }
  ,
  {
    path:'habilidades',component:HabilidadesComponent

  }
  ,
  {
    path:'sobremi',component:SobremiComponent

  }
,
  {
    path:'proyectos',component:ProyectoComponent


  }
,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
