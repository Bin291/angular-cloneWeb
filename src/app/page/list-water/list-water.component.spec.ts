import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWaterComponent } from './list-water.component';

describe('ListWaterComponent', () => {
  let component: ListWaterComponent;
  let fixture: ComponentFixture<ListWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWaterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
