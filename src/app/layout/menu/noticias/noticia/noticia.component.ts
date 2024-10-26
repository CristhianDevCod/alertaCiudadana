import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [NgIf],
  templateUrl: './noticia.component.html',
  styleUrl: "./noticia.component.css"
})
export class NoticiaComponent {
  //Lo que se recibe del arreglo noticias:
  @Input() id:string='';
  @Input() nombreAutor:string = "";
  @Input() imagenNoticia: string = "";
  @Input() tituloNoticia: string = "";
  @Input() numMeGusta: string[] = [];
  @Input() numNoMeGuSTA: string[] = [];
  @Input() descripcion: string = "";

  constructor(private router:Router){}
  
  // funciones
  limite10(texto:string, max:number, suspen:boolean = false): string{
    if(suspen){
      let nuevoTexto = texto.charAt(0).toLocaleUpperCase() + texto.substring(1, max) + "...";
      return nuevoTexto;
    }
    let nuevoTexto = texto.charAt(0).toLocaleUpperCase() + texto.substring(1, max) + ".";

    return nuevoTexto;
  }

  verNoticia(id:string){
    this.router.navigate(['/detalles',id])
  }

}
