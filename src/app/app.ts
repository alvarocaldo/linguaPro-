import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { NosotrosComponent } from './components/nosotros/nosotros';
import { IdiomasCursosComponent } from './components/idiomas-cursos/idiomas-cursos';
import { DocentesComponent } from './components/docentes/docentes';
import { PromocionesComponent } from './components/promociones/promociones';
import { ResenasComponent } from './components/resenas/resenas';
import { FormularioComponent } from './components/formulario/formulario';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    NosotrosComponent,
    IdiomasCursosComponent,
    DocentesComponent,
    PromocionesComponent,
    ResenasComponent,
    FormularioComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'linguapro';
}

