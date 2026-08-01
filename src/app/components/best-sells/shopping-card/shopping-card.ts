import { Component, Input } from '@angular/core';
import { ProductService } from '../../../core/services/core/services/product';
import { Products } from '../products';

@Component({
  selector: 'app-shopping-card',
  imports: [],
  templateUrl: './shopping-card.html',
  styleUrl: './shopping-card.scss',
})
export class ShoppingCard {
  @Input() data!: Products;

}
