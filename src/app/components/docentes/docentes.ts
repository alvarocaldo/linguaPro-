import { Component, inject } from '@angular/core';
import { CatalogoService } from '../../services/catalogo';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-docentes', standalone: true, imports: [CommonModule], templateUrl: './docentes.html' })
export class DocentesComponent {
  catalogoService = inject(CatalogoService);
}
