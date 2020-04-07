import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from './produit.service';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../shared/Produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  operation: string = 'add';
  selectedProduit: Produit;

  produitForm: FormGroup;
  constructor(private fb: FormBuilder,
              private produitService: ProductService,
              private route: ActivatedRoute) {
   this.creatForm();
  }

  ngOnInit() {
    this.initProduit();
    this.produits = this.route.snapshot.data.produit;
  }

  creatForm() {
    this.produitForm = this.fb.group({
      ref: ['', Validators.required],
      quantite: '',
      prix: ''
      
    });
  }
  loadProduct() {
    this.produitService.getProducts().subscribe(
      data => {this.produits = data},
      error => {console.log('An error was occured.', error)},
      () => {console.log('loading produits was done.')}
      
    );
  }

  addProduit() {
    const p = this.produitForm.value;
    this.produitService.addProduct(p).subscribe(
      res => {
        this.initProduit();
        this.loadProduct();
      }
    )
  
  }

  updateProduit() {
     
    console.log('555555555', this.selectedProduit);
    this.produitService.updateProduct(this.selectedProduit).subscribe(
      res => {
        this.initProduit();
        this.loadProduct();
      }
    )
  }

  initProduit(){
    this.selectedProduit = new Produit(); 
    this.creatForm();
  }

  deleteProduit() {
    this.produitService.deleteProduct(this.selectedProduit.id).subscribe(
      res => {
        this.selectedProduit = new Produit();
        this.loadProduct();
      }
    )
  }

}
