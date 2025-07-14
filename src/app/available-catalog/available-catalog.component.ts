import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service'; 


@Component({
  selector: 'app-available-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './available-catalog.component.html',
  styleUrl: './available-catalog.component.css'
})
export class AvailableCatalogComponent implements OnInit {
  prendas = [
    {
      nombre: 'Remera oversize',
      imagenUrl: 'assets/remera1.jpg',
      precio: 5999,
      talles: ['S', 'M', 'L']
    },
    {
      nombre: 'Campera de jean',
      imagenUrl: 'assets/campera1.jpg',
      precio: 12999,
      talles: ['M', 'L']
    },
    {
      nombre: 'Pantalón cargo',
      imagenUrl: 'assets/pantalon1.jpg',
      precio: 10999,
      talles: ['S', 'M']
    }
  ];

  carrito: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.carrito$.subscribe(carrito => {
      this.carrito = carrito;
    });
  }

  agregarAlCarrito(prenda: any) {
    this.cartService.agregarAlCarrito(prenda);
  }
}
