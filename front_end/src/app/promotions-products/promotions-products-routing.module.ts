import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPromotionsComponent } from './products-promotions/products-promotions.component';

const routes: Routes = [
  {path:'', component:ProductsPromotionsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionsProductsRoutingModule { }
