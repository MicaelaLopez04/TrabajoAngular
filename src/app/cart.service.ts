import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Prenda {
  nombre: string;
  precio: number;
  imagenUrl?: string;
  talles?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carrito: Prenda[] = [];
  private carritoSubject = new BehaviorSubject<Prenda[]>([]);
  carrito$ = this.carritoSubject.asObservable();

  agregarAlCarrito(prenda: Prenda) {
    this.carrito.push(prenda);
    this.carritoSubject.next(this.carrito);
  }

  vaciarCarrito() {
    this.carrito = [];
    this.carritoSubject.next(this.carrito);
  }

  eliminarDelCarrito(prenda: Prenda) {
    this.carrito = this.carrito.filter(p => p !== prenda);
    this.carritoSubject.next(this.carrito);
  }
}

