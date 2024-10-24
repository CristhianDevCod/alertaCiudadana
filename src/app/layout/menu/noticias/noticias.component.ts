import { Component, OnInit } from '@angular/core';
import { NoticiaComponent } from "./noticia/noticia.component";
import { NgFor } from '@angular/common';
import Noticia from '../../../api/interface/noticia';
import { DataServiceService } from '../../../api/services/data-service.service';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [NoticiaComponent, NgFor],
  templateUrl: './noticias.component.html'
})
export class NoticiasComponent implements OnInit {
  
  noticias: Noticia[];

  // Se llama siempre que se utilizan servicios de angular
  constructor(
    private dataService: DataServiceService
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
  };

  // Este método se ejecuta justo cuando se arranca el componente
  // se puede suscribir al observable para recibir los direferentes cambios
  ngOnInit(): void {
    this.dataService.getNoticias().subscribe(noticias => {
      console.log(noticias)
      this.noticias = noticias;
    })
  }
}
