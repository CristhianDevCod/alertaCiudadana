import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../../../../../api/services/data-service.service';
import { INoticiaIterface } from '../../../../../api/interfaces/inoticia.iterface';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './detalles.component.html'
})
export class DetallesComponent implements OnInit {
  id: string | null = null;
  noticia: INoticiaIterface | undefined;
  noticias: INoticiaIterface[] = [];

  constructor(private route: ActivatedRoute, private dataservice: DataServiceService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);

      // obtener todas las noticias
      this.dataservice.getNoticias().subscribe(noticias => {
        this.noticias = noticias; // almacena todas las noticias

        // filtrar la noticia por ID
        this.noticia = this.noticias.find(noticia => {
          return noticia.id === this.id;
        });
      })
    })
  }

  mayuscula(texto:string):string{
    const textoNuevo = texto.charAt(0).toLocaleUpperCase() + texto.substring(1);
    return textoNuevo;
  }
}
