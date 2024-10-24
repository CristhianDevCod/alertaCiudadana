import { Component } from '@angular/core';

@Component({
  selector: 'app-unknown',
  standalone: true,
  imports: [],
  template: `
    <p class="text-center fw-bold">
      Lo sentimos esta dirección no existe...<span class="fs-1">&#9973;</span>
    </p>
  `,
  styles: ``
})
export class UnknownComponent {

}
