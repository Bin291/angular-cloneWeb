import { Component } from '@angular/core';
import { ComboCardNotDiscountComponent } from '../../components/combo-card-not-discount/combo-card-not-discount.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-side-dish',
  imports: [ComboCardNotDiscountComponent],
  templateUrl: './side-dish.component.html',
  styleUrl: './side-dish.component.scss',
})
export class SideDishComponent {
  constructor(
    private ProductService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.sideDish;

    console.log(this.ProductService.sideDish);
  }

  get sideDish() {
    return this.ProductService.sideDish;
  }
}
