import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLastFooterComponent } from './the-last-footer.component';

describe('TheLastFooterComponent', () => {
  let component: TheLastFooterComponent;
  let fixture: ComponentFixture<TheLastFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheLastFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheLastFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
