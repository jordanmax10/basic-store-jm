import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-http.service";
import { Observable, of } from "rxjs";
import { Product } from "../../shared/interfaces/product.interface";

const LIMIT = 8;

@Injectable({
    providedIn : 'root'
})

export class ProductsService extends BaseHttpService{

    getProducts(page:number): Observable<Product[]>{
        return this.http.get<any[]>(`${this.apiUrl}/products`,{
            params: {
                // offset: (page - 1) * LIMIT, //offset es el inicio de la pagina
                limit: page * LIMIT, //limit es el final de la pagina

            }
        });
    }

    getProduct(id: string) : Observable<Product>{
        return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
    }
}