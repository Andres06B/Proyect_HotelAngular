import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { HabitacionesComponent } from './features/habitaciones/habitaciones.component';
import { ServiciosComponent } from './features/servicios/servicios.component';
import { ReservarHabitacionComponent } from './features/reservas/reservar-habitacion/reservar-habitacion.component';
import { FormularioComponent } from './features/reservas/formulario/formulario.component';
import { NosotrosComponent } from './features/nosotros/nosotros.component';
import { LogInComponent } from './features/auth/log-in/log-in.component';
import { CountUpModule } from 'ngx-countup'; // Importa CountUpModule
import { RouterModule } from '@angular/router';
import { FooterNavbarComponent } from './features/appWeb/app/components/footer-navbar/footer-navbar.component';
import { NavbarComponent } from './features/appWeb/app/components/navbar/navbar.component';
import { AcompanantesComponent } from './features/appWeb/app/components/acompanantes/acompanantes.component';
import { ActividadesSComponent } from './features/appWeb/app/components/actividades-s/actividades-s.component';
import { EstadiaComponent } from './features/appWeb/app/components/estadia/estadia.component';
import { HabitacioneSAppComponent } from './features/appWeb/app/components/habitacione-sapp/habitacione-sapp.component';
import { PerfilComponent } from './features/appWeb/app/components/perfil/perfil.component';
import { MainComponent } from './features/appWeb/app/components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HabitacionesComponent,
    ServiciosComponent,
    ReservarHabitacionComponent,
    FormularioComponent,
    NosotrosComponent,
    LogInComponent,
    FooterNavbarComponent,
    NavbarComponent,
    AcompanantesComponent,
    ActividadesSComponent,
    EstadiaComponent,
    HabitacioneSAppComponent,
    PerfilComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CountUpModule,
    RouterModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
