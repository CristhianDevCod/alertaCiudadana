import { Component } from '@angular/core';
import { NoticiaModel } from '../../../api/model/noticia.model';
import { NoticiaComponent } from "./noticia/noticia.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [NoticiaComponent, NgFor],
  templateUrl: './noticias.component.html'
})
export class NoticiasComponent {
  noticiasArr: NoticiaModel[] = [
    new NoticiaModel(
      'Juan Perez', 
      'images/corte de agua.jpg',
      'titulo de prueba', 
      10, 
      2, 
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, omnis.'),
    new NoticiaModel(
        'juan serrano', 
        'images/corte de agua.jpg',
        'titulo de prueba', 
        10, 
        2, 
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, omnis.'),
    new NoticiaModel(
          'pedro escanoso', 
          'images/corte de agua.jpg',
          'titulo de prueba', 
          10, 
          2, 
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, omnis.'),
  ];
}
