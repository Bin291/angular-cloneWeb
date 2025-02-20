import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCombosComponent } from './list-combos.component';

describe('ListCombosComponent', () => {
  let component: ListCombosComponent;
  let fixture: ComponentFixture<ListCombosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCombosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCombosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
