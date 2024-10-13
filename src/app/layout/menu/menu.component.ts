import { Component } from '@angular/core';
import { NoticiaComponent } from "./noticias/noticia/noticia.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NoticiaComponent],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  
}
