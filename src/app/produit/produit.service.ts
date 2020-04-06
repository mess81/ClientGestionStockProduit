import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../config/api.url.congig';
import { Observable } from 'rxjs';
import { Produit } from '../shared/Produit';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) {}

    getProducts(): Observable<any> {
        return this.http.get(API_URLS.PRODUITS_URL);
    }

    addProduct(produit: Produit): Observable<any>{
        return this.http.post(API_URLS.PRODUITS_URL, produit);
    }

    updateProduct(produit: Produit): Observable<any>{
        return this.http.put(API_URLS.PRODUITS_URL, produit);
    }

    deleteProduct(ref: string): Observable<any>{
        return this.http.delete(API_URLS.PRODUITS_URL + '/${ref}');
    }
}