import { Component } from '@angular/core';
import { NoticiasComponent } from "./noticias/noticias.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NoticiasComponent],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  
}
