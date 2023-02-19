import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeMiComponent } from './pages/acerca-de-mi/acerca-de-mi.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { SobremiComponent } from './pages/sobremi/sobremi.component';


@NgModule({
  declarations: [
    AppComponent,
    AcercaDeMiComponent,
    HabilidadesComponent,
    ContactoComponent,

    ProyectoComponent,
     SobremiComponent,
     FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
