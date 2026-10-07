import { Injectable, signal } from '@angular/core';
import { Inscripcion } from '../interfaces/inscripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  // Signal para almacenar la lista de inscripciones
  private inscripcionesSignal = signal<Inscripcion[]>([]);
  
  // Exponer el signal como solo lectura
  inscripciones = this.inscripcionesSignal.asReadonly();

  agregarInscripcion(inscripcion: Inscripcion) {
    // Actualizamos el signal agregando la nueva inscripción
    this.inscripcionesSignal.update(prev => [...prev, { ...inscripcion, id: prev.length + 1 }]);
  }
}


