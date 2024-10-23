import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-navbar',
  templateUrl: './footer-navbar.component.html',
  styleUrl: './footer-navbar.component.css'
})
export class FooterNavbarComponent {
  @Output() seccionCambiada = new EventEmitter<string>();

  seleccionarSeccion(seccion: string) {
    this.seccionCambiada.emit(seccion);
  }
}
