import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShopComponent} from "./shop.component";
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatCardModule} from "@angular/material/card";
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import {MatTableModule} from "@angular/material/table";

const routes : Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      {
        path: 'categorie',
        loadChildren: () => import('./categorie/categorie.module').then(m => m.CategorieModule)
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'search',
        component: SearchComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    ShopComponent,
    SearchComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatTooltipModule,
    MatCardModule,
    MatTableModule
  ]
})
export class ShopModule { }
