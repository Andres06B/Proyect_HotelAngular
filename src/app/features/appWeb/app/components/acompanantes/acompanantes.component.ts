import { Component } from '@angular/core';

@Component({
  selector: 'app-acompanantes',
  templateUrl: './acompanantes.component.html',
  styleUrl: './acompanantes.component.css'
})
export class AcompanantesComponent {
 // Lista de acompañantes
 // Lista de acompañantes
 companions = [
  { name: 'Juan Pérez', age: 35, isAdult: true },
  { name: 'María García', age: 30, isAdult: true },
  { name: 'Carlos Pérez', age: 7, isAdult: false },
  { name: 'Sofía López', age: 5, isAdult: false }
];

// Acompañante seleccionado para mostrar detalles
selectedCompanion: any = null;

viewCompanionDetails(companion: any) {
  this.selectedCompanion = companion;
}

closeCompanionDetails() {
  this.selectedCompanion = null;
}
}
