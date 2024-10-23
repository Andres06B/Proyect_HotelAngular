import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './features/home/home.component';
import { HabitacionesComponent } from './features/habitaciones/habitaciones.component';
import { ServiciosComponent } from './features/servicios/servicios.component';
import { ReservarHabitacionComponent } from './features/reservas/reservar-habitacion/reservar-habitacion.component';
import { NosotrosComponent } from './features/nosotros/nosotros.component';
import { FormularioComponent } from './features/reservas/formulario/formulario.component';
import { LogInComponent } from './features/auth/log-in/log-in.component';
import { ReservarExitosaComponent } from './features/reservas/reservar-exitosa/reservar-exitosa.component';
import { MainComponent } from './features/appWeb/app/components/main/main.component';
import { HabitacioneSAppComponent } from './features/appWeb/app/components/habitacione-sapp/habitacione-sapp.component';
import { AcompanantesComponent } from './features/appWeb/app/components/acompanantes/acompanantes.component';
import { EstadiaComponent } from './features/appWeb/app/components/estadia/estadia.component';
import { ActividadesSComponent } from './features/appWeb/app/components/actividades-s/actividades-s.component';

const routes: Routes = [
  //Home
  { path: '', redirectTo:'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },

  //habitaciones
  { path: 'Habitaciones', component: HabitacionesComponent },

  //Servicios
  { path: 'Servicios', component: ServiciosComponent },
  
  //Reservas
  { path: 'Reservas', component: ReservarHabitacionComponent },
  { path: 'FormularioReservas', component: FormularioComponent },
  { path: 'Factura', component:ReservarExitosaComponent}, 
  
  //Nosotros
  { path: 'Nosotros', component: NosotrosComponent },
  //log in
  { path: 'log-in', component:LogInComponent},

  //Aplicativo
  { path: 'main', component: MainComponent },
  { path: 'HabitacionesApp', component: HabitacioneSAppComponent },
  { path: 'acompanantes', component: AcompanantesComponent },
  { path: 'estadia', component: EstadiaComponent },
  { path: 'actividades-s', component: ActividadesSComponent }
  
  //{path:'',component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
