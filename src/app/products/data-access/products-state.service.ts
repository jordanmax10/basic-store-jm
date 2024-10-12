import { inject, Injectable } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from '../../products/data-access/products.service';
import { catchError, map, of, startWith, Subject, switchMap } from 'rxjs';
import { Product } from '../../shared/interfaces/product.interface';

interface State {
  products: Product[];
  status: 'loading' | 'success' | 'error';
  page: number;
}

@Injectable() //Sirve para que el servicio se pueda inyectar en cualquier parte de la aplicacion

export class ProductsStateService {
    
  private productsService = inject(ProductsService);

  private initialState: State = {
    products: [],
    status: 'loading' as const,
    page: 1,
  };

  changePage = new Subject<number>();

  loadProducts = this.changePage.pipe(
    startWith(1),
    switchMap((page) => this.productsService.getProducts(page)),
    map((products) => ({ products, status: 'success' as const, })), //map sirve para transformar la respuesta del observable
    catchError(()=>{ //catchError sirve para capturar un error en el observable
      return of({
        products: [],
        status: 'error' as const,
      }); //of sirve para crear un observable
    }), //retorna un observable con un objeto vacio
  );

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.changePage.pipe(
        map((page)=> ({
          page, 
          status: 'loading' as const,
        }))
      ),
      this.loadProducts,
    ],
  });
}