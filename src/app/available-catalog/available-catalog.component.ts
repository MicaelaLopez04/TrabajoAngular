import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service'; 
import { Prenda } from '../prenda.model'; 
import { InputIntegerComponent } from '../input-integer/input-integer.component';


@Component({
  selector: 'app-available-catalog',
  standalone: true,
  imports: [CommonModule, InputIntegerComponent],
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
      quantity: 1
    },
    {
      nombre: 'Campera de jean',
      imagenUrl: 'assets/CamperaJean.jpg',
      precio: 12999,
      talles: ['M', 'L'],
      stock:7,
      clearance: false,
      quantity: 1
    },
    {
      nombre: 'Jean Crem',
      imagenUrl: 'assets/Jeans.jpg',
      precio: 10999,
      talles: ['S', 'M'],
      stock:3,
      clearance: false,
      quantity: 1
    },
       {
      nombre: 'Remera oversize',
      imagenUrl: 'assets/remera.jpg',
      precio: 5999,
      talles: ['S', 'M', 'L'],
      stock:2,
      clearance:false,
      quantity: 1
    },
    {
      nombre: 'Campera de jean',
      imagenUrl: 'assets/CamperaJean.jpg',
      precio: 12999,
      talles: ['XL'],
      stock:7,
      clearance: true,
      quantity: 1
    },
    {
      nombre: 'Jean Blue',
      imagenUrl: 'assets/Jeans.jpg',
      precio: 10999,
      talles: ['S', 'M','XL'],
      stock:3,
      clearance: false,
      quantity: 1
    },
     {
      nombre: 'Jean White',
      imagenUrl: 'assets/Jeans.jpg',
      precio: 10999,
      talles: ['S', 'L','XL'],
      stock:8,
      clearance: true,
      quantity: 1
    },
     {
      nombre: 'Jean Light-Blue',
      imagenUrl: 'assets/Jeans.jpg',
      precio: 10999,
      talles: ['S', 'M','L','XL','XXL'],
      stock:3,
      clearance: false,
      quantity: 1
    },
     {
      nombre: 'Campera de jean',
      imagenUrl: 'assets/CamperaJean.jpg',
      precio: 12999,
      talles: ['XL'],
      stock:7,
      clearance: true,
      quantity: 1
    },
    {
      nombre: 'Jean Blue',
      imagenUrl: 'assets/Jeans.jpg',
      precio: 10999,
      talles: ['S', 'M','XL'],
      stock:3,
      clearance: false,
      quantity: 1
    },
     {
      nombre: 'Jean White',
      imagenUrl: 'assets/Jeans.jpg',
      precio: 10999,
      talles: ['S', 'L','XL'],
      stock:15,
      clearance: true,
      quantity: 1
    },
     {
      nombre: 'Jean Light-Blue',
      imagenUrl: 'assets/Jeans.jpg',
      precio: 10999,
      talles: ['S', 'M','L','XL','XXL'],
      stock:9,
      clearance: false,
      quantity: 1
    }
  ];

  carrito: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.carrito$.subscribe(carrito => {
      this.carrito = carrito;
    });
  }

 

}
