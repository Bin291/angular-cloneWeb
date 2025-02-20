import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { comboModel } from '../../models/combos';
import { MainDish } from '../../models/mainDish';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  product!: comboModel | undefined;
  protected readonly ProductService = ProductService;

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
  ) {
    const comboId = this.activeRoute.snapshot.params['id'];

    console.log(comboId);

    this.product = productService.getComboById(comboId);

    // console.log(this.product);
  }
}
