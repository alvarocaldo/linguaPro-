import { Component, inject } from '@angular/core';
import { CatalogoService } from '../../services/catalogo';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-resenas', standalone: true, imports: [CommonModule], templateUrl: './resenas.html' })
export class ResenasComponent {
  catalogoService = inject(CatalogoService);
}
