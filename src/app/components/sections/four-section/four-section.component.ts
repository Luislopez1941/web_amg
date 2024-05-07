import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-four-section',
  standalone: true,
  imports: [InputTextModule, InputTextareaModule, ButtonModule, CommonModule, FormsModule],
  templateUrl: './four-section.component.html',
  styleUrl: './four-section.component.css'
})
export default class FourSectionComponent {
  nombre: string = '';
  correo: string = '';
  telefono: string = '';
  ciudad: string = '';
  mensaje: string = '';

  guardar() {
    console.log('Nombre:', this.nombre);
    console.log('Correo:', this.correo);
    console.log('Teléfono:', this.telefono);
    console.log('Ciudad:', this.ciudad);
    console.log('Mensaje:', this.mensaje);
    // Aquí puedes agregar lógica para guardar los datos, por ejemplo, enviarlos a un servicio o hacer alguna operación con ellos.
  }
}
