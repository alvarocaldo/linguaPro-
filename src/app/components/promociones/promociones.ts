import { Component, inject } from '@angular/core';
import { CatalogoService } from '../../services/catalogo';
import { CommonModule } from '@angular/common';
@Component({ selector: 'app-promociones', standalone: true, imports: [CommonModule], templateUrl: './promociones.html' })
export class PromocionesComponent {
  catalogoService = inject(CatalogoService);
}
