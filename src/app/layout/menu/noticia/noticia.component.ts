import { Component } from '@angular/core';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent {
  imagen = "/images/corte de agua.jpg"
  descripcion = "Lorem insu dolor mucho dolor"
}
