import { Component } from '@angular/core';
import { ComboCardComponent } from '../../components/combo-card/combo-card.component';
import { ProductService } from '../../services/product.service';
import { ComboCardNotDiscountComponent } from '../../components/combo-card-not-discount/combo-card-not-discount.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lish-main-dish',
  imports: [ComboCardNotDiscountComponent],
  templateUrl: './lish-main-dish.component.html',
  styleUrl: './lish-main-dish.component.scss',
})
export class LishMainDishComponent {
  navbarMailList!: LishMainDishComponent;

  constructor(
    private ProductService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.mainList;

    console.log(this.ProductService.mainDish);
  }

  get mainList() {
    return this.ProductService.mainDish;
  }
}
