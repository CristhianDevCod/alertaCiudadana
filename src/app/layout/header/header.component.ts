import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink, 
    FormsModule,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private router:Router){}

  logo = "/images/logo.png";
  searchQuery: string = '';
  isValid:boolean = false;

  //Función de búsqueda
  iniciarBusqueda() {
    if (this.isValid) {
      this.router.navigate(["/busqueda", this.searchQuery]);
      return;
    }
    this.searchQuery = '';
  }

  validarCampo() {
    if(this.searchQuery.trim() == ''){
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }
}
