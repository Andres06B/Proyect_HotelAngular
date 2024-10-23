import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  cardVerified = false;
  processing: boolean = false;

  constructor(private router: Router) {}

  realizarPago() {
    // Activar el spinner
    this.processing = true;

    // Simular un retraso de 5 segundos para el proceso de pago
    setTimeout(() => {
      // Redirigir al componente de factura
      this.router.navigate(['/Factura']);
    }, 5000); // 5 segundos
  }

  verifyCard() {
    const btnPagar = document.getElementById('btnPagar') as HTMLButtonElement;
    btnPagar.innerText = 'Verificar Tarjeta';  // Reset text when amount changes
  }

  submitPayment() {
    this.cardVerified = true;
    const btnPagar = document.getElementById('btnPagar') as HTMLButtonElement;
    btnPagar.innerText = 'Pagar con Tarjeta';  // Change text after verification
  }

  // Lógica para agregar acompañantes
  agregarAcompanantes() {
    const btnAgregarAcompanantes = document.getElementById('agregarAcompanantes');
    const acompanantesContainer = document.getElementById('acompanantesContainer');

    // Escuchar el click del botón
    btnAgregarAcompanantes?.addEventListener('click', () => {
      const numAcompanantes = (document.getElementById('numAcompanantes') as HTMLInputElement).value;
      
      // Limpiar los acompañantes anteriores
      acompanantesContainer!.innerHTML = '';

      // Generar campos dinámicamente para cada acompañante
      for (let i = 1; i <= parseInt(numAcompanantes); i++) {
        const acompananteDiv = document.createElement('div');
        acompananteDiv.classList.add('mb-3');

        acompananteDiv.innerHTML = `
          <h5>Acompañante ${i}</h5>
          <!-- Nombre -->
          <div class="mb-3">
            <label for="nombreAcompanante${i}" class="form-label">Nombre</label>
            <div class="input-group">
              <span class="input-group-text"><i class="bi bi-person"></i></span>
              <input type="text" class="form-control" id="nombreAcompanante${i}" placeholder="Nombre" required>
            </div>
          </div>

          <!-- Apellido -->
          <div class="mb-3">
            <label for="apellidoAcompanante${i}" class="form-label">Apellido</label>
            <div class="input-group">
              <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
              <input type="text" class="form-control" id="apellidoAcompanante${i}" placeholder="Apellido" required>
            </div>
          </div>

          <!-- Tipo de Documento -->
          <div class="mb-3">
            <label for="tipoDocumentoAcompanante${i}" class="form-label">Tipo de Documento</label>
            <div class="input-group">
              <span class="input-group-text"><i class="bi bi-card-text"></i></span>
              <select class="form-select" id="tipoDocumentoAcompanante${i}">
                <option selected>Cédula de ciudadanía</option>
                <option value="1">Pasaporte</option>
                <option value="2">Tarjeta de identidad</option>
              </select>
            </div>
          </div>

          <!-- Número de Documento -->
          <div class="mb-3">
            <label for="numeroDocumentoAcompanante${i}" class="form-label">Número de Documento</label>
            <div class="input-group">
              <span class="input-group-text"><i class="bi bi-card-text"></i></span>
              <input type="text" class="form-control" id="numeroDocumentoAcompanante${i}" placeholder="Número de Documento" required>
            </div>
          </div>
        `;

        acompanantesContainer?.appendChild(acompananteDiv);
      }
    });
  }

  // Llamar a la función cuando el componente sea inicializado
  ngOnInit() {
    this.agregarAcompanantes();
  }
}
