import { Component } from '@angular/core';
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

@Component({
    selector: 'app-publicacion',
    standalone: true,
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './publicacion.component.html',
    styleUrl: './publicacion.component.css'
})
export class PublicacionComponent {

    //Arreglo de todas las imagenes
    images: string[];
    urlImagen:string;

    constructor(private storage: Storage) {
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

    // Métodos
    async onSubmit(event: any) {
        // campos
        const newTitle = event.target[0].value;
        const describe = event.target[1].value;
        const imageFile = event.target[2].files[0];

        // Generación de referencia a la imagen
        const imgRef = ref(this.storage, `images/${imageFile.name}`);

        try {
            // Subida de la imagen
            const response = await uploadBytes(imgRef, imageFile);
            // console.log(response);

            // Obtener la URL de la imagen después de subirla
            const estaimagen = response.metadata.fullPath;
            console.log(estaimagen);

            // Esperar a que se obtenga la URL de la imagen
            this.urlImagen = await this.getMyImage(ref(this.storage, estaimagen));
            
            //------------------------------- estructurar el objeto

            // Actualizar el arreglo de imágenes
            this.getImages();
        } catch (error) {
            console.log(error);
        }
    }

    // Recuperar URL de la imagen actual
    async getMyImage(imageRef: StorageReference): Promise<string> {
        try {
            const urlThisImage = await getDownloadURL(imageRef);
            return urlThisImage;  // Devolver la URL de la imagen
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    // Recuperación de imágenes
    getImages(){
        const imagesRef = ref(this.storage, 'images');

        listAll(imagesRef)
            .then(async response => {
                this.images = [];

                for (let image of response.items) {
                    const url = await getDownloadURL(image);
                    this.images.push(url);
                }
                console.log(this.images);
            })
            .catch(error => console.log(error));
    }
}