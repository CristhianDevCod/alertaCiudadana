import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar [(ngModel)]

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule], // Agrega FormsModule aquí
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private router:Router){}

  logo = "/images/logo.png";
  searchQuery: string = '';

  //Función de búsqueda
  iniciarBusqueda() {
    if (this.searchQuery) {
      this.router.navigate(["/busqueda", this.searchQuery]);
      console.log("Success");
    }
  }
}
