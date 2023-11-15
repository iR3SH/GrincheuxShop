import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfosComponent } from './infos/infos.component';
import { AddressesComponent } from './addresses/addresses.component';
import { DeliveryComponent } from './delivery/delivery.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ProfileComponent} from "./profile.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";

const routes : Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'infos',
        component: InfosComponent
      },
      {
        path: 'addresses',
        component: AddressesComponent
      },
      {
        path: 'delivery',
        component: DeliveryComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo : ''
  }
]

@NgModule({
  declarations: [
    InfosComponent,
    AddressesComponent,
    DeliveryComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
