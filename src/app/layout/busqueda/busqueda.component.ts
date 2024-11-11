import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../../api/services/data-service.service';
import { INoticiaIterface } from '../../api/interface/inoticia.iterface';
import { NgIf } from '@angular/common';
import { NoticiasComponent } from "../menu/noticias/noticias.component";

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [NgIf, NoticiasComponent],
  templateUrl: './busqueda.component.html',
  styles: ``
})
export class BusquedaComponent implements OnInit {
  searchQuery: string = '';
  noticias: INoticiaIterface[] = [];
  noticiasFiltradas: INoticiaIterface[] = [];
  sinResultados:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataServiceService 
  ){}

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      this.searchQuery = params['query']?.toLowerCase();
    });

    // Se obtienen las noticias y se aplica el filtro
    this.dataService.getNoticias().subscribe((noticias) => {
      this.noticias = noticias;
      this.filtrarNoticias();
    });
  }

  filtrarNoticias():void {
    if(this.searchQuery){
      this.noticiasFiltradas = this.noticias.filter( (noticia) => {
        return (noticia.titulo?.toLowerCase().includes(this.searchQuery) || noticia.descripcion?.toLocaleLowerCase().includes(this.searchQuery))
      });

      console.log(this.noticiasFiltradas)

      this.sinResultados = this.noticiasFiltradas.length === 0;
    } else {
      this.sinResultados = false;
    }
  }
}
