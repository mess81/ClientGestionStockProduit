import { Component, OnInit } from '@angular/core';
import { ProduitMockService } from './produimockservice';
import { Produit } from '../shared/Produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  constructor(private produitService: ProduitMockService) { }

  ngOnInit() {
    this.produits = this.produitService.getProduit();
  }

}
