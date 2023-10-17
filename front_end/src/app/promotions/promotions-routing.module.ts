import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionsPagesComponent } from './promotions-pages/promotions-pages.component';
import { ProductsPromotionsComponent } from '../promotions-products/products-promotions/products-promotions.component';


const routes: Routes = [
  {path:'', component:PromotionsPagesComponent},
  {path:'', component:ProductsPromotionsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionsRoutingModule { }
