import { Component, OnInit } from '@angular/core';
import { ProduitMockService } from './produimockservice';
import { Produit } from '../shared/Produit';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];

  produitForm: FormGroup;
  constructor(private fb: FormBuilder,
              private produitService: ProduitMockService) {
    this.produitForm = this.fb.group({
      ref: ['', Validators.required],
      quantite: '',
      prix: ''
      
    });
  }

  ngOnInit() {
    this.produits = this.produitService.getProduit();
  }

}
