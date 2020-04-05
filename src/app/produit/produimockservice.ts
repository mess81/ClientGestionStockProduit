import { Injectable } from '@angular/core'
import { Produit } from "../shared/Produit";

@Injectable()
export class ProduitMockService {

    private PRODUITS: Produit[] = [];

    constructor() {
        let p1: Produit = new Produit('Livre', 50, 20);
        let p2: Produit = new Produit('Stylo', 500, 5);
        let p3: Produit = new Produit('Cahie', 200, 20);
        let p4: Produit = new Produit('Trousse', 300, 10);

        this.PRODUITS.push(p1, p2, p3 ,p4);
    
    }

    public getProduit(): Produit[] {
        return this.PRODUITS;

    }
}