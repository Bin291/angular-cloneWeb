import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailNotComboComponent } from './product-detail-not-combo.component';

describe('ProductDetailNotComboComponent', () => {
  let component: ProductDetailNotComboComponent;
  let fixture: ComponentFixture<ProductDetailNotComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailNotComboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailNotComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
