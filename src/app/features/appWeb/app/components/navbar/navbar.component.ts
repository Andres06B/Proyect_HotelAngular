import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userName = 'Carlos Manuel';
  userLastName = 'Pérez';
  userEmail = 'CarlosMperez@example.com';
  userNationality = 'Colombiana';
  userAge = 25;
  profilePicture = 'https://b2472105.smushcdn.com/2472105/wp-content/uploads/2023/01/Perfil-Profesional-_63-819x1024.jpg?lossy=1&strip=1&webp=1';
  showUserProfile = false;
  showConfirmModal = false; // Para la confirmación de cierre de sesión
  loading = false;

  constructor(private router: Router) {}

  // Abrir y cerrar perfil
  toggleProfile() {
    this.showUserProfile = !this.showUserProfile;
  }

  hideProfile() {
    this.showUserProfile = false;
  }

  // Confirmar cierre de sesión
  confirmLogout() {
    this.showConfirmModal = true;
  }

  closeConfirmModal() {
    this.showConfirmModal = false;
  }

  // Cerrar sesión con un spinner
  logout() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.showConfirmModal = false;
      this.router.navigate(['log-in']);
    }, 2000);
  }

  // Selección de archivo para cambiar la imagen de perfil
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePicture = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
