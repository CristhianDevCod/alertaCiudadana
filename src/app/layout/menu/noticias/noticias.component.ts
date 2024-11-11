import { Component, Input, OnInit } from '@angular/core';
import { NoticiaComponent } from "./noticia/noticia.component";
import { NgFor } from '@angular/common';
import { INoticiaIterface } from '../../../api/interface/inoticia.iterface';
import { DataServiceService } from '../../../api/services/data-service.service';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [NoticiaComponent, NgFor],
  templateUrl: './noticias.component.html'
})
export class NoticiasComponent implements OnInit {
  @Input() noticias: INoticiaIterface[] = [];

  // Se llama siempre que se utilizan servicios de angular
  constructor(
    private dataService: DataServiceService
  ){};

  // Este método se ejecuta justo cuando se arranca el componente
  // se puede suscribir al observable para recibir los direferentes cambios
  ngOnInit(): void {
    if(this.noticias.length === 0){
      this.dataService.getNoticias().subscribe(noticias => {
        // console.log(noticias)
        this.noticias = noticias;
      })
    }
  }
}
