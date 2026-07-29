import { Component } from '@angular/core';
import { Ads } from './ads/ads';
import { ShoppingCard } from "./shopping-card/shopping-card";

@Component({
  selector: 'app-best-sells',
  imports: [Ads, ShoppingCard],
  templateUrl: './best-sells.html',
  styleUrl: './best-sells.scss',
})
export class BestSells {

}
