import { Component, inject } from '@angular/core';
import { 
  ReactiveFormsModule, 
  FormControl,
  FormGroup 
} from '@angular/forms';
import { UserService } from '../../../api/services/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './inicio-sesion.component.html'
})
export class InicioSesionComponent {
  // Atributos
  loginForm:FormGroup;
  router = inject(Router);
  
  constructor(
    private userService:UserService
  ){
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }
  // Metodos
  onSubmit(){
    // console.log(this.loginForm.value)
    this.userService.login(this.loginForm.value)
    .then( response => {
      console.log(response)
      this.router.navigateByUrl('');
    })
    .catch(error => console.log(error))
  }
  
  signInGoogle() {
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigateByUrl('');
      })
      .catch(error => console.log(error))
  }

}
