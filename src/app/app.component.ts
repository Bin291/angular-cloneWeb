import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { TopNavbarContent1Component } from './components/top-navbar-content1/top-navbar-content1.component';
import { ComboCardComponent } from './components/combo-card/combo-card.component';
import { TopBannerImagesContent2Component } from './components/top-banner-images-content2/top-banner-images-content2.component';
import { NavbarContent3Component } from './components/navbar-content3/navbar-content3.component';
import { ComponentLogoMiddle2Component } from './components/component-logo-middle2/component-logo-middle2.component';
import { TheLastFooterComponent } from './components/the-last-footer/the-last-footer.component';
import { ProductService } from './services/product.service';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';

@Component({
  selector: 'app-root',
  imports: [
    TopNavbarContent1Component,
    TopBannerImagesContent2Component,
    NavbarContent3Component,
    ComponentLogoMiddle2Component,
    TheLastFooterComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'web-clone-angular';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) {}
}
