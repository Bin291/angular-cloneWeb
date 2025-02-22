import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combo-card',
  imports: [],
  templateUrl: './combo-card.component.html',
  styleUrl: './combo-card.component.scss',
})
export class ComboCardComponent {
  @Input() id: number = 0;
  @Input() image = '';
  @Input() title = '';
  @Input() decriotion = '';
  @Input() discount: number = 0;
  @Input() price: number = 0;

  constructor(
    private ProductService: ProductService,
    private router: Router,
  ) {}

  navigateToDetail(id: number) {
    console.log(id);
    this.router.navigate(['/product', id]);
  }
}
