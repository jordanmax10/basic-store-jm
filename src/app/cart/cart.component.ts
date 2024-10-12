import { Component, inject } from '@angular/core';
import { CartItemComponent } from './ui/cart-item/cart-item.component';
import { CartStateService } from '../shared/data-access/card-state.service';
import { ProductItemCart } from '../shared/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
  styles: ``
})
export class CartComponent {

  state = inject(CartStateService).state;

  onRemove(id: number) {
    this.state.remove(id);
  }

  onDecrease(product: ProductItemCart) {
    this.state.update({
      product: product.product,
      quantity: product.quantity - 1
    });
  }

  onIncrease(product: ProductItemCart) {
    this.state.update({
      product: product.product,
      quantity: product.quantity + 1
    });
  }

}
