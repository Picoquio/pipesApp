import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'pipesApp';


  nombre: string = 'Juan'

  mostrarNombre() {
    console.log(this.nombre);
    
  }


}
