import { Component } from '@angular/core';

@Component({
  selector: 'app-estadia',
  templateUrl: './estadia.component.html',
  styleUrl: './estadia.component.css'
})
export class EstadiaComponent {
  reservedRooms = [
    {
      hotelName: "Iguana's House",
      roomName: "Tech Room",
      checkInDate: "8 Octubre 2024, Martes",
      checkOutDate: "9 Octubre 2024, Miércoles",
      nights: 1,
      occupancy: "2 Adultos",
      regimen: "Desayuno incluido",
      offers: "En Octubre Vive en Familia"
    },
    {
      hotelName: "Iguana's House",
      roomName: "Junior Suite",
      checkInDate: "10 Octubre 2024, Jueves",
      checkOutDate: "12 Octubre 2024, Sábado",
      nights: 2,
      occupancy: "2 Adultos, 1 Niño",
      regimen: "Desayuno y Cena",
      offers: "Ofertas para familias"
    }
  ];
}
