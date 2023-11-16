import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieComponent } from './categorie.component';
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
const routes : Routes = [
  {
    path: ':id',
    component: CategorieComponent
  }
]


@NgModule({
  declarations: [
    CategorieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class CategorieModule { }
