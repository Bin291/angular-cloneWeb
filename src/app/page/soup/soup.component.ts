import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ComboCardNotDiscountComponent } from '../../components/combo-card-not-discount/combo-card-not-discount.component';

@Component({
  selector: 'app-soup',
  imports: [ComboCardNotDiscountComponent],
  templateUrl: './soup.component.html',
  styleUrl: './soup.component.scss',
})
export class SoupComponent {
  constructor(
    private ProductService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.soups;

    console.log(this.ProductService.soup);
  }

  get soups() {
    return this.ProductService.soup;
  }
}
