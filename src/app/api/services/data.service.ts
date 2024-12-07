import { Injectable } from '@angular/core';
import { 
  Firestore, 
  collection, 
  addDoc, 
  collectionData 
} from '@angular/fire/firestore';
import { INoticiaIterface } from '../interfaces/inoticia.iterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Se inyecta firestore en el constructor, se pueden inyectar otras herramientas como aut. o history  aqui se importan los servicios de cada una de ellas
  constructor(private firestore:Firestore) { }

  // Los servicios sirven para crear estos metodos y utilizarlos desde cualquier otro componente

  addNoticia(noticia: INoticiaIterface){
    // Esto recibira los datos del formulario de la nueva noticia
    const noticiaRef = collection(this.firestore, 'noticias');
    return addDoc(noticiaRef, noticia);
  }

  // Método para recuperar todas las noticias guardadas en la base de datos
  // devuelve un observable, para que sea sencillo a la hora de recuperar información 
  // a un observable se puede suscribir, por lo tanto se puede estar atento continuamente para saber que esta pasando sobre
  // el observable
  getNoticias():Observable<INoticiaIterface[]>{
    const noticiaRef = collection(this.firestore, 'noticias');
    // Se emplea este método, retornara los datos de una coleccion 
    return collectionData(noticiaRef, { idFiel: 'id' }) as Observable<INoticiaIterface[]>
  }
}