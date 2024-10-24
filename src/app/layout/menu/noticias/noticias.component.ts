import { Component } from '@angular/core';
import { NoticiaComponent } from "./noticia/noticia.component";
import { NgFor } from '@angular/common';
import Noticia from '../../../api/interface/noticia';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [NoticiaComponent, NgFor],
  templateUrl: './noticias.component.html'
})
export class NoticiasComponent {
  
  noticias: Noticia[];


  constructor(

  ){
    this.noticias = [{
      id: '0',
      autor: 'Patricia teran',
      titulo: 'Noticia de prueba',
      descripcion: 'Este es el cuerpo de una noticia muy grande',
      imagenURL: '/images/corte de agua.jpg',
      meGusta: [],
      noMeGusta: []
    }];
  }
}
