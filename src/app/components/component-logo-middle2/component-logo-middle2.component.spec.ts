import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLogoMiddle2Component } from './component-logo-middle2.component';

describe('ComponentLogoMiddle2Component', () => {
  let component: ComponentLogoMiddle2Component;
  let fixture: ComponentFixture<ComponentLogoMiddle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLogoMiddle2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLogoMiddle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
