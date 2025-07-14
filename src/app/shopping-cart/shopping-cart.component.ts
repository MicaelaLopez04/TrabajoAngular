import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {
  carrito: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.carrito$.subscribe(carrito => {
      this.carrito = carrito;
    });
  }

  vaciarCarrito() {
    this.cartService.vaciarCarrito();
  }

  comprar() {
    const total = this.carrito.reduce((acc, p) => acc + p.precio, 0);
    alert(`Compraste ${this.carrito.length} productos por $${total}`);
    this.vaciarCarrito();
  }
}





