import { inject, Injectable } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from './products.service';
import { catchError, map, Observable, of, startWith, Subject, switchMap } from 'rxjs';

interface State {
  product: Product | null;
  status: 'loading' | 'success' | 'error';
}

@Injectable() //Sirve para que el servicio se pueda inyectar en cualquier parte de la aplicacion

export class ProductsDetailStateService {
    
  private productsService = inject(ProductsService);

  private initialState: State = {
    product: null,
    status: 'loading' as const,
  };


  state = signalSlice({
    initialState: this.initialState,
    actionSources: { //actionSources sirve para definir las acciones que se pueden realizar en el estado
        getById: (_state , $: Observable<string>) => $.pipe( //$.pipe sirve para transformar el observable
            switchMap((id) => this.productsService.getProduct(id)), //switchMap sirve para cambiar el observable
            map((data) =>({product : data , status: 'success' as const})), //map sirve para transformar la respuesta del observable
        ),
    },
  });
}