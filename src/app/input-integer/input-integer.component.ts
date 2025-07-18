import { Component, Input } from '@angular/core';
import { Prenda } from '../prenda.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-input-integer',
  standalone: true,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.css'
})
export class InputIntegerComponent {
  @Input() quantity: number=1;
  @Input() max?: number;
  
  constructor(private cartService: CartService) {}

  incrementar() {
  if (this.quantity < (this.max ?? Infinity)) {
    this.quantity++;
  }
}

decrementar() {
  if (this.quantity > 1) {
    this.quantity--;
  }
}

actualizarCantidadDesdeInput(event: Event) {
  const input = event.target as HTMLInputElement;
  let valor = parseInt(input.value, 10);
  const limite = this.max ?? Infinity;

  if (isNaN(valor) || valor < 1) {
    valor = 1;
  } else if (valor > limite) {
    valor = limite;
  }

  this.quantity = valor;
}

}

