import { Injectable } from '@angular/core';
import { 
  Auth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider
} from '@angular/fire/auth';
//Este servicio permitirá realizar todas las conecciónes y empezar a integrarlo dentro de la aplicación.


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Se inyecta el servicio, para poder utilzarlo
  constructor(private auth: Auth) { }

  register(email:string, password:string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider())
  }

  logout(){
    return signOut(this.auth);
  }
}
