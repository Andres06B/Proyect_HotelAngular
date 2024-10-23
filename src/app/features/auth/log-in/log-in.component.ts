import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Aquí iría la lógica de autenticación
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
