import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AvailableCatalogComponent } from './available-catalog/available-catalog.component'; 
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, AvailableCatalogComponent, ShoppingCartComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Salome';
}

