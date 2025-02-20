import { Routes } from '@angular/router';
import { ListCombosComponent } from './page/list-combos/list-combos.component';
import { LishMainDishComponent } from './page/lish-main-dish/lish-main-dish.component';
import { SideDishComponent } from './page/side-dish/side-dish.component';
import { SoupComponent } from './page/soup/soup.component';
import { ListWaterComponent } from './page/list-water/list-water.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProductDetailNotComboComponent } from './page/product-detail-not-combo/product-detail-not-combo.component';

export const routes: Routes = [
  {
    path: '',
    component: ListCombosComponent,
  },

  {
    path: 'mainlist',
    component: LishMainDishComponent,
  },
  {
    path: 'sidedish',
    component: SideDishComponent,
  },
  {
    path: 'soup',
    component: SoupComponent,
  },
  {
    path: 'water',
    component: ListWaterComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'mainDish/:id',
    component: ProductDetailNotComboComponent,
  },
];
