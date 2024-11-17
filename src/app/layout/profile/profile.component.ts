import { Component, inject } from '@angular/core';
import { UserService } from '../../api/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styles: ``
})
export class ProfileComponent {
  router = inject(Router)
  constructor(
    private userService:UserService
  ){}
  
  cerrarSesion(){
    this.userService.logout()
      .then(resolve => {
        console.log(resolve)
        this.router.navigateByUrl('');
      })
      .catch(error => console.log(error));
  }
}
