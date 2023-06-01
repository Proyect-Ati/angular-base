import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  nombre: string = 'Iroman';
  edad: number = 20;

  get nombrecap(): string{
    return this.nombre.toUpperCase();
  }
  getnombre(): string{
    
    return `${ this.nombre } - ${this.edad}`;

  }

  cambiarNombre():void{
    this.nombre = 'Spiderman';
  }
  
  cambiarEdad():void{
    this.edad = 25;
  }


}
