import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  
  constructor(
    
    //animacion pulsante de botones y similares
    private primengConfig: PrimeNGConfig) {}
 
  ngOnInit() {
    //animacion pulsante de botones y similares
    this.primengConfig.ripple = true;
  }


}
