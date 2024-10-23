import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservar-exitosa',
  templateUrl: './reservar-exitosa.component.html',
  styleUrls: ['./reservar-exitosa.component.css']
})
export class ReservarExitosaComponent {
  constructor(private router: Router) { }

  volverAlInicio() {
    // Redirige al usuario a la página de inicio
    this.router.navigate(['/Home']);
  }

  generarFacturaPDF() {
    const doc = new jsPDF();

    // Agregar logo (en formato base64 o asegurarte de que la imagen esté accesible)
    const logoUrl = 'Imagen1.png'; // Reemplaza con el Base64 real o usa una URL

    // Verificar que el logo se cargue correctamente
    const img = new Image();
    img.src = logoUrl;
    img.onload = () => {
      doc.addImage(img, 'PNG', 150, 10, 40, 20);  // Ajusta la posición y tamaño del logo
      
      // Título de la factura con estilo mejorado
      doc.setFontSize(24);
      doc.setFont('helvetica', 'bold');
      doc.text('Factura de Reserva', 14, 40);

      // Línea divisoria
      doc.setLineWidth(0.5);
      doc.line(14, 45, 196, 45);  // Dibujar una línea horizontal

      // Información del huésped
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text('Nombre del Huésped: Juan Pérez', 14, 55);
      doc.text('Nacionalidad: Colombiano', 14, 65);
      doc.text('Correo Electrónico: juan.perez@example.com', 14, 75);

      // Información de la reserva
      doc.text('Hotel: Iguana\'s House, Colombia', 14, 90);
      doc.text('Entrada: 8 Octubre 2024, Martes', 14, 100);
      doc.text('Salida: 9 Octubre 2024, Miércoles', 14, 110);
      doc.text('Noches: 1', 14, 120);
      doc.text('Ocupación: 2 Adultos', 14, 130);
      doc.text('Habitación: Tech Room', 14, 140);
      doc.text('Descripción de la Habitación: Habitación moderna equipada con tecnología de última generación.', 14, 150);
      doc.text('Régimen: Desayuno incluido', 14, 160);
      doc.text('Tarifa: Tarifa Flexible', 14, 170);

      // Tabla de costos mejorada
      const tableData = [
        ['Descripción', 'Costo'],
        ['Total sin impuestos', 'COP 628,150.00'],
        ['Impuestos 19%', 'COP 119,348.50'],
        ['Total', 'COP 747,498.50']
      ];

      autoTable(doc, {
        head: [['Descripción', 'Costo']],
        body: tableData.slice(1),  // Excluye la cabecera, ya está incluida en head
        startY: 185,
        theme: 'grid',  // Para añadir bordes a la tabla
        styles: {
          fontSize: 10,
          halign: 'center'
        },
        headStyles: {
          fillColor: [22, 160, 133],  // Cambia el color de la cabecera
          textColor: [255, 255, 255]  // Color del texto en la cabecera
        },
        alternateRowStyles: {
          fillColor: [240, 240, 240]  // Color de las filas alternas
        }
      });

      // Mensaje de pie de página sin usar autoTable
      doc.setFontSize(10);
      const footerText = 'Gracias por reservar con nosotros.';
      const pageHeight = doc.internal.pageSize.height; // Obtener altura de la página
      const footerY = pageHeight - 20; // Ubicación Y para el pie de página
      doc.text(footerText, 14, footerY); // Dibujar el pie de página

      // Generar y descargar el PDF
      doc.save('factura_reserva.pdf');
    };

    img.onerror = () => {
      console.error('Error al cargar la imagen del logo.');
      // Puedes mostrar un mensaje al usuario o manejar el error de otra manera
    };
  }
}
