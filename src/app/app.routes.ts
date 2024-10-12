import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./products/features/product-shell/product.routes').then(
        (m) => m.productRoutes,
      ),
  },
  {
    path: 'carrito',
    loadChildren: () => import('./cart/cart.routes').then((m) => m.cartRoute),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
