import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionsRoutingModule } from './promotions-routing.module';
import { PromotionsPagesComponent } from './promotions-pages/promotions-pages.component';
import { SharedModule } from '../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import { ProductsPromotionsComponent } from '../promotions-products/products-promotions/products-promotions.component';

@NgModule({
  declarations: [
    PromotionsPagesComponent,
    ProductsPromotionsComponent
  ],
  imports: [
    CommonModule,
    PromotionsRoutingModule,
    SharedModule,
    MatCardModule
  ]
})
export class PromotionsModule { }
