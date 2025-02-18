import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarContent3Component } from './navbar-content3.component';

describe('NavbarContent3Component', () => {
  let component: NavbarContent3Component;
  let fixture: ComponentFixture<NavbarContent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarContent3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarContent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
