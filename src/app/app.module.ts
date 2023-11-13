import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthInterceptorService} from "./grincheux-shop/services/auth-interceptor.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgToastModule} from "ng-angular-popup";

const routes: Routes = [{
    path: '',
    loadChildren: () => import('./grincheux-shop/grincheux-shop.module').then(m => m.GrincheuxShopModule)
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    NgToastModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent
   ]
})
export class AppModule { }
