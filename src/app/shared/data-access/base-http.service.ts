// Este servicio se encarga de hacer las peticiones HTTP al servidor
// y de guardar los datos en la store de ngrx
// Se encarga de consumir los datos de la API

import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment.development";

@Injectable(
    {
        providedIn: 'root' //esto es para que el servicio se pueda inyectar en cualquier parte de la aplicacion
    }
)
export class BaseHttpService {

    http = inject(HttpClient);
    
    apiUrl= environment.API_URL;

}