import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-combo-card-not-discount',
  imports: [],
  templateUrl: './combo-card-not-discount.component.html',
  styleUrl: './combo-card-not-discount.component.scss',
})
export class ComboCardNotDiscountComponent {
  @Input() image = '';
  @Input() title = '';
  @Input() price: number = 0;
  @Input() id: number = 0;

  constructor(
    private ProductService: ProductService,
    private router: Router,
  ) {}

  navigateToDetail(id: number) {
    console.log(id);
    this.router.navigate(['/mainDish', id]);
  }
}
