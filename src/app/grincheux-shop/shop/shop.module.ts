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
import { ComputersComponent } from './computers/computers.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { PickaxesComponent } from './pickaxes/pickaxes.component';
import {MatCardModule} from "@angular/material/card";

const routes : Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      {
        path: 'computers',
        component: ComputersComponent
      },
      {
        path: 'laptops',
        component: LaptopsComponent
      },
      {
        path: 'smartphones',
        component: SmartphonesComponent
      },
      {
        path: 'pickaxes',
        component: PickaxesComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ShopComponent,
    ComputersComponent,
    LaptopsComponent,
    SmartphonesComponent,
    PickaxesComponent
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
    MatCardModule
  ]
})
export class ShopModule { }
