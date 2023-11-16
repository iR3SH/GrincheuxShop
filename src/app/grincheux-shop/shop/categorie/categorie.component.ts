import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ShopService} from "../service/shop.service";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.scss'
})
export class CategorieComponent {
  idCateg : number = 0;
  products: any;
  constructor(private route: ActivatedRoute, private shopService : ShopService) {
    this.route.params.subscribe({
      next: (params : any) => {
        //this.idCateg = params.id
        this.loadCategorie(params.id)
      }
    });
  }
  loadCategorie(id : Number){
    this.shopService.getProductsFromCateg(id).subscribe({
      next: (resultat) => {
        this.products = resultat
      }
    });
  }
}
