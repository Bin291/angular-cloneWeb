import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboCardNotDiscountComponent } from './combo-card-not-discount.component';

describe('ComboCardNotDiscountComponent', () => {
  let component: ComboCardNotDiscountComponent;
  let fixture: ComponentFixture<ComboCardNotDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboCardNotDiscountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboCardNotDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
