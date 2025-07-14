import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service'; 
import { Prenda } from '../prenda.model'; 


@Component({
  selector: 'app-available-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './available-catalog.component.html',
  styleUrls: ['./available-catalog.component.css'] 
})
export class AvailableCatalogComponent implements OnInit {
  prendas: Prenda[]= [
    {
      nombre: 'Remera oversize',
      imagenUrl: 'assets/remera.jpg',
      precio: 5999,
      talles: ['S', 'M', 'L'],
      stock:2,
      clearance:true,
    },
    {
      nombre: 'Campera de jean',
      imagenUrl: 'assets/CamperaJean.jpg',
      precio: 12999,
      talles: ['M', 'L'],
      stock:7,
      clearance: false,
    },
    {
      nombre: 'Jeans',
      imagenUrl: 'assets/Jeans.jpg',
      precio: 10999,
      talles: ['S', 'M'],
      stock:3,
      clearance: false,
    }
  ];

  carrito: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.carrito$.subscribe(carrito => {
      this.carrito = carrito;
    });
  }

  agregarAlCarrito(prenda: Prenda) {
  if (prenda.stock > 0) {
    this.cartService.agregarAlCarrito(prenda);
    prenda.stock--;
  }
}

}
