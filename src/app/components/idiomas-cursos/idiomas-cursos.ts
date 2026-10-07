import { Component, inject } from '@angular/core';
import { CatalogoService } from '../../services/catalogo';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-idiomas-cursos', standalone: true, imports: [CommonModule], templateUrl: './idiomas-cursos.html' })
export class IdiomasCursosComponent {
  catalogoService = inject(CatalogoService);
}
