import { Injectable, signal } from '@angular/core';
import { Docente } from '../interfaces/docente.interface';
import { Idioma } from '../interfaces/idioma.interface';
import { Promocion } from '../interfaces/promocion.interface';
import { Resena } from '../interfaces/resena.interface';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  // Datos simulados (Mock data)
  docentes = signal<Docente[]>([
    { id: 1, nombre: 'Ana Gómez', especialidad: 'Inglés Avanzado', idiomas: ['Inglés', 'Español'], foto: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, nombre: 'Carlos Ruiz', especialidad: 'Francés Básico', idiomas: ['Francés', 'Inglés'], foto: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, nombre: 'María López', especialidad: 'Alemán Intermedio', idiomas: ['Alemán', 'Español'], foto: 'https://i.pravatar.cc/150?img=3' }
  ]);

  idiomas = signal<Idioma[]>([
    { id: 1, nombre: 'Inglés', descripcion: 'Cursos desde básico hasta avanzado.', icono: 'bi-translate' },
    { id: 2, nombre: 'Francés', descripcion: 'Aprende el idioma del amor.', icono: 'bi-chat-heart' },
    { id: 3, nombre: 'Alemán', descripcion: 'Ideal para estudios y trabajo en Europa.', icono: 'bi-building' }
  ]);

  promociones = signal<Promocion[]>([
    { id: 1, titulo: 'Descuento de Verano', descripcion: 'Matricúlate en cualquier curso de Inglés.', descuento: '30% OFF', validoHasta: '28/02/2026' },
    { id: 2, titulo: 'Plan Familiar', descripcion: 'Inscribe a 2 o más personas.', descuento: '40% OFF', validoHasta: '15/03/2026' }
  ]);

  resenas = signal<Resena[]>([
    { id: 1, estudiante: 'Juan Pérez', comentario: 'Excelente metodología, aprendí muy rápido.', puntuacion: 5, curso: 'Inglés Básico' },
    { id: 2, estudiante: 'Lucía Fernández', comentario: 'Los profesores son muy pacientes y dinámicos.', puntuacion: 4, curso: 'Francés Intermedio' }
  ]);
}

