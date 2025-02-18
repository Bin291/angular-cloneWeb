import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBannerImagesContent2Component } from './top-banner-images-content2.component';

describe('TopBannerImagesContent2Component', () => {
  let component: TopBannerImagesContent2Component;
  let fixture: ComponentFixture<TopBannerImagesContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBannerImagesContent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBannerImagesContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
