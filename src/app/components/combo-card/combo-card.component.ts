import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-combo-card',
  imports: [],
  templateUrl: './combo-card.component.html',
  styleUrl: './combo-card.component.scss'
})
export class ComboCardComponent {
  @Input() image=""
  @Input() title = ""
  @Input() discount:number  =0
  @Input() price:number = 0
  @Input() description = ""
}
