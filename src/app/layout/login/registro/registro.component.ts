import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../api/services/user.service';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    FormsModule
  ],
  templateUrl: './registro.component.html'
})
export class RegistroComponent {

  constructor(
    private userService: UserService
  ){
    this.formReg = new FormGroup({
      email: new FormControl,
      passwor: new FormControl
    })
  }
  // Atributos
  formReg: FormGroup;
  passwordVisible: boolean = false; 
  email: string = '';
  password: string = '';
  emailFocused: boolean = false;
  passwordFocused: boolean = false;

  // metodos
  onSubmit() {}
  togglePasswordVisibility(){
    this.passwordVisible = !this.passwordVisible;
  }

  isEmailValid():boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(this.email);
  }

  isPasswordValid():boolean {
    return this.password.length >= 8;
  }
}
