import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPromotionsComponent } from './products-promotions.component';

describe('ProductsPromotionsComponent', () => {
  let component: ProductsPromotionsComponent;
  let fixture: ComponentFixture<ProductsPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsPromotionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
