import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [],
  templateUrl: './noticia.component.html',
  styleUrl: "./noticia.component.css"
})
export class NoticiaComponent {
  //Lo que se recibe del arreglo noticias:
  @Input() nombreAutor:string = "";
  @Input() imagenNoticia: string = "";
  @Input() tituloNoticia: string = "";
  @Input() numMeGusta: number = 0;
  @Input() numNoMeGuSTA: number = 0;
  @Input() descripcion: string = "";
  
  // funciones
  limite10(texto:string, max:number, suspen:boolean = false): string{
    if(suspen){
      let nuevoTexto = texto.charAt(0).toLocaleUpperCase() + texto.substring(1, max) + "...";
      return nuevoTexto;
    }
    let nuevoTexto = texto.charAt(0).toLocaleUpperCase() + texto.substring(1, max) + ".";

    return nuevoTexto;
  }

}
