import { Routes } from '@angular/router';

export const productRoutes: Routes = [
  {
    path: '',
    //Sirve para cargar el componente de manera dinámica
    loadComponent: () => import('../product-list/product-list.component').then(m => m.ProductListComponent), 
  },
  {
    path: 'product/:id',
    loadComponent: () => import('../product-detail/product-detail.component').then(m => m.ProductDetailComponent),
  }
];
