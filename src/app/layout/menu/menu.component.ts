import { Component } from '@angular/core';
import { NoticiaComponent } from "./noticia/noticia.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NoticiaComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  
}
