import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import Noticia from '../interface/noticia';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  // Se inyecta firestore en el constructor, se pueden inyectar otras herramientas como aut. o history  aqui se importan los servicios de cada una de ellas
  constructor(private firestore:Firestore) { }

  // Los servicios sirven para crear estos metodos y utilizarlos desde cualquier otro componente

  addNoticia(noticia: Noticia){
    // Esto recibira los datos del formulario de la nueva noticia
    const noticiaRef = collection(this.firestore, 'noticias');
    return addDoc(noticiaRef, noticia);
  }
}


