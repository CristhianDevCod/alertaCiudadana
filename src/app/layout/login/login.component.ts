import { Component } from '@angular/core';
import { RegistroComponent } from "./registro/registro.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RegistroComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {

}
