import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
//Este servicio permitirá realizar todas las conecciónes y empezar a integrarlo dentro de la aplicación.


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Se inyecta el servicio, para poder utilzarlo
  constructor(private auth: Auth) { }

  register({email, passwor}: any) {
    return createUserWithEmailAndPassword(this.auth, email, passwor);
  }
}
