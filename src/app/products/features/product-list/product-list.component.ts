import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';
import { ProductCardComponent } from "../../ui/product-card/product-card.component";
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Product } from '../../../shared/interfaces/product.interface';
import { ProductsStateService } from '../../data-access/products-state.service';
import { CartStateService } from '../../../shared/data-access/card-state.service';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent,CommonModule,NgxPaginationModule],
  templateUrl: './product-list.component.html',
  providers: [ProductsStateService]
})
export class ProductListComponent {

  // private productsService = inject(ProductsService);


  // //suscribe sirve para escuchar los cambios de un observable y ejecutar una funcion
  // constructor(){
  //   this.productsService.getProducts().subscribe((products)=>{
  //     console.log(products);
  //   });
  // } 
  
  productsState = inject(ProductsStateService);
  cardState = inject(CartStateService).state;

  // changePage(){
  //   const page = this.productsState.state.page() + 1;
  //   this.productsState.changePage.next(page);
  // }

  // Para la paginación

  itemsPerPage:number = 8;// Cantidad de productos por página
  currentPage:number = 1;



  changePage(page: number) {
    this.currentPage = page;
    this.productsState.changePage.next(page);
    // alert('Cambio de página');
  }

  trackByProduct(index: number, product: Product) {
    return product.id; // O cualquier propiedad única de tu producto
  }

  addToCart(product:Product){
    this.cardState.add({
      product,
      quantity: 1
    })
  }


}
