import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsPagesComponent } from './promotions-pages.component';

describe('PromotionsPagesComponent', () => {
  let component: PromotionsPagesComponent;
  let fixture: ComponentFixture<PromotionsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
