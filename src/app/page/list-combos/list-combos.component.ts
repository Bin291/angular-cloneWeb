import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ComboCardComponent } from '../../components/combo-card/combo-card.component';

@Component({
  selector: 'app-list-combos',
  imports: [ComboCardComponent],
  templateUrl: './list-combos.component.html',
  styleUrl: './list-combos.component.scss',
})
export class ListCombosComponent {
  constructor(private ProductService: ProductService) {
    console.log(this.ProductService.ComboS);
  }

  get combo() {
    return this.ProductService.ComboS;
  }
}
