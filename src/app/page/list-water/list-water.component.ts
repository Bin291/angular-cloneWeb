import { Component } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {
  ComboCardNotDiscountComponent
} from '../../components/combo-card-not-discount/combo-card-not-discount.component';

@Component({
  selector: 'app-list-water',
  imports: [ComboCardNotDiscountComponent],
  templateUrl: './list-water.component.html',
  styleUrl: './list-water.component.scss',
})
export class ListWaterComponent {
  constructor(private ProductServiec: ProductService) {
    console.log(this.ProductServiec.water);
  }

  get waters() {
    return this.ProductServiec.water;
  }
}
