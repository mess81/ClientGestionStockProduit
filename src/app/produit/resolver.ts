import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductService } from './produit.service';

@Injectable()
export class ProduitResolver implements Resolve<any> {
    constructor(private produitService: ProductService){

    }
    resolve(){
        return this.produitService.getProducts();
    }
}