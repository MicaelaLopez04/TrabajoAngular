import { Component } from '@angular/core';
import { AvailableCatalogComponent } from '../available-catalog/available-catalog.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';


@Component({
  selector: 'app-store',
  imports: [ AvailableCatalogComponent, ShoppingCartComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

}
