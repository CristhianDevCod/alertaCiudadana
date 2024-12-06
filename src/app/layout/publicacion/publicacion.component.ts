import { Component, inject, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators
} from '@angular/forms';
import {
    Storage,
    ref,
    uploadBytes,
    listAll,
    getDownloadURL,
    StorageReference
} from '@angular/fire/storage';
import { DataServiceService } from '../../api/services/data-service.service';
import { INoticiaIterface } from '../../api/interface/inoticia.iterface';
import { Router } from '@angular/router';

@Component({
    selector: 'app-publicacion',
    standalone: true,
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './publicacion.component.html'
})
export class PublicacionComponent implements OnInit {
    router = inject(Router);

    //Arreglo de todas las imagenes
    images: string[];
    urlImagen:string;

    // En el constructor se inyectan los servicios generados en services
    constructor(
        private storage: Storage,
        private noticiaService: DataServiceService // Servicio para interactuar con firestorage
    ) {
        this.images = [];
        this.urlImagen = '';
     }

    ngOnInit(){
        this.getImages();
    }

    noticiaForm = new FormGroup({
        titulo: new FormControl('', Validators.required),
        descripcion: new FormControl('', Validators.required),
        imagen: new FormControl('', Validators.required)
    });

    // Método para manejar el formulario
    async onSubmit(event: SubmitEvent) {
        // Obtener los valores del formulario
        const form = event.target as HTMLFormElement;

        const id = Date.now().toString();
        const newTitle = (form.elements[0] as HTMLInputElement).value;
        const describe = (form.elements[1] as HTMLTextAreaElement).value;
        const imageFile = (form.elements[2] as HTMLInputElement).files![0];
        const meGusta: string[] = [];
        const noMeGusta: string[] = [];

        // Generar referencia a la imagen en Storage
        const imgRef = ref(this.storage, `images/${imageFile.name}`);

        try {
            // Subir la imagen a Firebase Storage
            const response = await uploadBytes(imgRef, imageFile);
            
            // Obtener la URL de la imagen subida
            const imageUrl = await this.getMyImage(ref(this.storage, response.metadata.fullPath));
            
            // Estructurar el objeto de noticia con la URL de la imagen
            const noticia: INoticiaIterface = {
                id: id,
                autor: 'Nombre del autor', // Puedes cambiar esto mas adelante
                titulo: newTitle,
                descripcion: describe,
                imagenURL: imageUrl,  // Aquí se coloca la URL de la imagen
                meGusta: meGusta,
                noMeGusta: noMeGusta
            };
            
            // Guardar la noticia en Firestore
            await this.noticiaService.addNoticia(noticia);
            // const noticiaRef = await this.noticiaService.addNoticia(noticia);
            // console.log('Noticia guardada:', noticiaRef);
            
            //Dirigir al usuario a el area de menu
            this.router.navigateByUrl('');
            

            // Actualizar el arreglo de imágenes
            this.getImages();

        } catch (error) {
            console.log('Error al subir imagen o guardar noticia:', error);
        }
    }

    // Obtener la URL de la imagen subida
    async getMyImage(imageRef: StorageReference): Promise<string> {
        try {
            const urlThisImage = await getDownloadURL(imageRef);
            return urlThisImage;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    // Recuperar imágenes ya almacenadas en Storage
    getImages(){
        const imagesRef = ref(this.storage, 'images');

        listAll(imagesRef)
            .then(async response => {
                this.images = [];
                for (const image of response.items) {
                    const url = await getDownloadURL(image);
                    this.images.push(url);
                }
                // console.log(this.images);
            })
            .catch(error => console.log(error));
    }
}