import { Component } from '@angular/core';
import { 
  FormControl,
  FormGroup, 
  ReactiveFormsModule,
  Validators 
} from '@angular/forms';

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

  noticiaForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required)
  });

  onSubmit(){
    console.log('funciona')
  }
}
