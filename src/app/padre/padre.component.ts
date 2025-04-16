import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  standalone: false,
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  nombre: string = 'Estudiante';
  contadorTotal: number = 0;

  actualizarContador(valor: number) {
    this.contadorTotal += valor;
  }

  cambiarNombre() {
    this.nombre = 'Programador Junior';
  }
}
