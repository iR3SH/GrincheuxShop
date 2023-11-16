import {Component, OnInit} from '@angular/core';
import {ShopService} from "../service/shop.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
  products : any = []
  displayedColumns: string[] = ['product-image', 'product-name', 'product-description', 'product-price', 'product-actions'];
  constructor(private shopService : ShopService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe({
      next: (result) => {
        this.shopService.getProductsFromName({ name: result["name"] }).subscribe({
          next: (resultat) => {
            this.products = resultat;
          }
        });
      }
    });
  }
  viewProduct(id : Number){
    console.log(id)
  }
}
