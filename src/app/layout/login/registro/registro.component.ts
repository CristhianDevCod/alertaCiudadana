import { Component } from '@angular/core';
import { 
  FormControl, 
  FormGroup, 
  ReactiveFormsModule,
  FormsModule,
  Validators 
} from '@angular/forms';
import { UserService } from '../../../api/services/user.service';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    FormsModule,
    RouterLink
  ],
  templateUrl: './registro.component.html'
})
export class RegistroComponent {

  constructor(
    private userService: UserService,
    private router:Router
  ){}
  
  // Atributos
  formReg = new FormGroup({
    formEmail : new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    formPass : new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });
  passwordVisible = false; 
  emailFocused = false;
  passwordFocused = false;
  usuarioCreado = false;

  // metodos
  onSubmit() {
    if(this.formReg.valid){
        this.userService.register(
            this.formReg.value.formEmail!, 
            this.formReg.value.formPass!
          )// Pass
          .then( response => {
            console.log(response)
            this.router.navigate(['/login'])
            // mensaje de feedback
            this.usuarioCreado = !this.usuarioCreado;
            // vaciar campos
            this.formReg.reset();
          })// Error
          .catch( error => {
            console.log(error);
            this.usuarioCreado = false;
          })
    } else {
      console.log('Formulario invalido')
    }
  }

  togglePasswordVisibility(){
    this.passwordVisible = !this.passwordVisible;
  }

  isEmailValid():boolean {
    const emailControl = this.formReg.get('formEmail');
    return emailControl?.valid || false;
  }

  isPasswordValid():boolean {
    const passwordControl = this.formReg.get('formPass');
    return passwordControl?.valid || false;
  }
}
