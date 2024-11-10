import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [],
  templateUrl: './busqueda.component.html',
  styles: ``
})
export class BusquedaComponent {
  searchQuery: string = '';

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.searchQuery = params['query'];
    })
  }
}
