import { Component } from '@angular/core';
import { comboModel } from '../../models/combos';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { MainDish } from '../../models/mainDish';

@Component({
  selector: 'app-product-detail-not-combo',
  imports: [],
  templateUrl: './product-detail-not-combo.component.html',
  styleUrl: './product-detail-not-combo.component.scss',
})
export class ProductDetailNotComboComponent {
  product!: MainDish | undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
  ) {
    const comboId = this.activeRoute.snapshot.params['id'];
    console.log(comboId);

    this.product = productService.getMainDishById(comboId);
    // this.product = productService.getSideDishById(comboId);
    // this.product = productService.getWaterById(comboId);
    // this.product = productService.getSoupById(comboId);
    // console.log(this.product);
  }
}
