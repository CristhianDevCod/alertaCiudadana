import { Component } from '@angular/core';
import { NoticiaComponent } from "./noticias/noticia/noticia.component";
import { NoticiasComponent } from "./noticias/noticias.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NoticiaComponent, NoticiasComponent],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  
}
