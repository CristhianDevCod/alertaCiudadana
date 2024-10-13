import { Component } from '@angular/core';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [],
  templateUrl: './noticia.component.html',
  styleUrl: "./noticia.component.css"
})
export class NoticiaComponent {
  // Declaraciones
  autorNombre:string = "Juan Perez alzalavilla".substring(0, 10) + "."
  src:string = "images/corte de agua.jpg"
  alt:string = "imagen de prueba"
  cardDesc: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, omnis.".substring(0, 60) + "..."
}
