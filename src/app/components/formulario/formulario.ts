import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InscripcionService } from '../../services/inscripcion';
import { Inscripcion } from '../../interfaces/inscripcion.interface';

@Component({ selector: 'app-formulario', standalone: true, imports: [FormsModule, CommonModule], templateUrl: './formulario.html' })
export class FormularioComponent {
  inscripcionService = inject(InscripcionService);
  nombre = signal(''); email = signal(''); idioma = signal(''); modalidad = signal('Presencial');
  mostrarAlerta = signal(false); mensajeAlerta = signal(''); tipoAlerta = signal<'success' | 'danger'>('success');

  enviarFormulario() {
    if (!this.nombre() || !this.email() || !this.idioma()) {
      this.tipoAlerta.set('danger'); this.mensajeAlerta.set('Por favor, complete todos los campos obligatorios.'); this.mostrarAlerta.set(true); return;
    }
    const nuevaInscripcion: Inscripcion = { nombre: this.nombre(), email: this.email(), idioma: this.idioma(), modalidad: this.modalidad() };
    this.inscripcionService.agregarInscripcion(nuevaInscripcion);
    this.tipoAlerta.set('success'); this.mensajeAlerta.set('¡Inscripción registrada con éxito!'); this.mostrarAlerta.set(true);
    this.nombre.set(''); this.email.set(''); this.idioma.set(''); this.modalidad.set('Presencial');
    setTimeout(() => this.mostrarAlerta.set(false), 3000);
  }
}
