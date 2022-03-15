import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

  private nombre:string='jose luis del carmen gutierrez santiBañez';

  get getNombre():string{
    return this.nombre;
  }
  logNombre(){
    console.log(this.nombre);
  }

}
