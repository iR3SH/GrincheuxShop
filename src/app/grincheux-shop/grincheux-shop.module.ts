import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { GrincheuxShopComponent } from './grincheux-shop.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgToastModule} from "ng-angular-popup";
import {MatCardModule} from "@angular/material/card";
import { ShopComponent } from './shop/shop.component';
const routes: Routes = [{
  path : '',
  component: GrincheuxShopComponent,
  children : [
    {
      path : '',
      component: HomeComponent
    },
    {
      path: 'user',
      loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    },
    {
      path: 'shop',
      loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
    }
  ]
}];

@NgModule({
  declarations: [
    GrincheuxShopComponent,
    HomeComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        FaIconComponent,
        NgOptimizedImage,
        NgToastModule,
        MatCardModule
    ]
})
export class GrincheuxShopModule { }
