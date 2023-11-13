import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./grincheux-shop/grincheux-shop.module').then(m => m.GrincheuxShopModule)
  },
  { path : '**',
  redirectTo: 'grincheuxshop'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
