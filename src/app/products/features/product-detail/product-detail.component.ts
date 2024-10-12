import { Component,effect,inject,input } from '@angular/core';
import { ProductsDetailStateService } from '../../data-access/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';
import { CartStateService } from '../../../shared/data-access/card-state.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styles: ``,
  providers: [ProductsDetailStateService]
})
export class ProductDetailComponent {

  //FORMA DE OBTENER LOS PARAMETROS DE LA URL NUMERO 1

  // private activatedRoute = inject(ActivatedRoute);

  // constructor(){
  //   this.activatedRoute.params.subscribe((params)=>{
  //     console.log(params);
  //   });
  // }

  //FORMA DE OBTENER LOS PARAMETROS DE LA URL NUMERO 2

  productDetailState = inject(ProductsDetailStateService).state; 
  cartState = inject(CartStateService).state;

  id = input.required<string>();

  constructor(){
    effect(()=>{
      console.log(this.id());
      this.productDetailState.getById(this.id());
    });
  }

  addToCart(){
    this.cartState.add({
      product: this.productDetailState.product()!,
      quantity: 1
    })
  }

}
