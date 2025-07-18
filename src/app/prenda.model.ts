export interface Prenda {
  nombre: string;
  imagenUrl: string;
  precio: number;
  talles: string[];
  stock: number;
  clearance: boolean;
  quantity?: number; 
}