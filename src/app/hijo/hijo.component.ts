import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() nombre: string = '';
  @Output() sumar = new EventEmitter<number>();

  sumarUno() {
    this.sumar.emit(1);
  }

}
