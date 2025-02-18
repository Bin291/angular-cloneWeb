import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavbarContent1Component } from './top-navbar-content1.component';

describe('TopNavbarContent1Component', () => {
  let component: TopNavbarContent1Component;
  let fixture: ComponentFixture<TopNavbarContent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNavbarContent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavbarContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
