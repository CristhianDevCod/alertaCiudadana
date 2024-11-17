import { Component} from '@angular/core';
import { RegistroComponent } from "./registro/registro.component";
import { InicioSesionComponent } from "./inicio-sesion/inicio-sesion.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RegistroComponent,
    InicioSesionComponent
],
  templateUrl: './login.component.html'
})
export class LoginComponent {
}
