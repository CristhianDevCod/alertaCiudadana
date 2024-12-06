import { Component} from '@angular/core';
import { InicioSesionComponent } from "./inicio-sesion/inicio-sesion.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InicioSesionComponent
],
  templateUrl: './login.component.html'
})
export class LoginComponent {
}
