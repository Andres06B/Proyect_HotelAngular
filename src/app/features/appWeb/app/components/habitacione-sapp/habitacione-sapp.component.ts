import { Component } from '@angular/core';


interface Room {
  name: string;
  icon: string;
  description: string;
  services: string[];
}
@Component({
  selector: 'app-habitacione-sapp',
  templateUrl: './habitacione-sapp.component.html',
  styleUrl: './habitacione-sapp.component.css'
})
export class HabitacioneSAppComponent {
  reservedRooms: Room[] = [
    {
      name: 'Habitación Deluxe',
      icon: 'fas fa-hotel', 
      description: 'Disfruta de lujo y comodidad con vistas panorámicas al mar.',
      services: ['Wi-Fi gratuito', 'Desayuno incluido', 'Mini bar']
    },
    {
      name: 'Habitación Estándar',
      icon: 'fas fa-bed', 
      description: 'Una habitación acogedora y confortable para tu descanso.',
      services: ['Wi-Fi', 'TV por cable']
    },
  ];
  
  selectedRoom: Room | null = null;
  
  showDetails(room: Room): void {
    this.selectedRoom = room;
  }
  
}
