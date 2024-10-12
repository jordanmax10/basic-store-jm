import { Routes } from "@angular/router";

export const cartRoute: Routes =[

    {
        path: '',
        loadComponent: () => import('./cart.component')
        .then(m => m.CartComponent),
    }
];