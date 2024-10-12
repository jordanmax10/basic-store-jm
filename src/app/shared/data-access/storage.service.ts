import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ProductItemCart } from "../interfaces/product.interface";

@Injectable({
    providedIn : 'root'
})

export class StorageService {
    loadProducts(): Observable<ProductItemCart[]>{
        const rawProducts = localStorage.getItem('products'); //getItem sirve para obtener un item del local storage

        return of(rawProducts ? JSON.parse(rawProducts) : []); //of sirve para crear un observable
    }

    saveProducts(products: ProductItemCart[]) :void{
        localStorage.setItem('products', JSON.stringify(products)); //setItem sirve para guardar un item en el local storage
    }
}