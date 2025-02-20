import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LishMainDishComponent } from './lish-main-dish.component';

describe('LishMainDishComponent', () => {
  let component: LishMainDishComponent;
  let fixture: ComponentFixture<LishMainDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LishMainDishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LishMainDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
