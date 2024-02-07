import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionsProductsRoutingModule } from './promotions-products-routing.module';
import { ProductsPromotionsComponent } from './products-promotions/products-promotions.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ProductsPromotionsComponent,
    
  ],
  imports: [
    CommonModule,
    PromotionsProductsRoutingModule,
    SharedModule,
    MatCardModule,
    
    

  ]
})
export class PromotionsProductsModule { }
