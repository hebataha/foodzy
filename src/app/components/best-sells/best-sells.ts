import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ads } from './ads/ads';
import { ShoppingCard } from "./shopping-card/shopping-card";
import { ProductService } from '../../core/services/core/services/product';
import { Products } from './products';

@Component({
  selector: 'app-best-sells',
  imports: [Ads, ShoppingCard],
  templateUrl: './best-sells.html',
  styleUrl: './best-sells.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BestSells implements OnInit {
  constructor(private _Product: ProductService) {
  console.log('constructor');

  }
  

  data: any[] = [];
  ngOnInit(): void {
      console.log('ngOnInit');

    this._Product.getAllProducts().subscribe({
      next: (res: any) => {
        this.data = res.products;
        console.log(this.data)
 

      },
      error: (err) => {
        console.log(err)

      }
    })
  }
  @ViewChild('mySwiper', { static: false }) swiperEl!: ElementRef;
  ngAfterViewInit() {
    const swiperParams = {
      navigation: true,
      pagination: {
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // 👈 السطر ده هيوقف التقليب التلقائي لما تقف بالماوس عليه
      },
      slidesPerView: 4,
      spaceBetween: 30,
       breakpoints: {
      // When window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // When window width is >= 1024px
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
    };



  }
  nextSlide() {
    // 👈 استدعاء ميثود الانتقال للسلايد التالي
    this.swiperEl.nativeElement.swiper.slideNext();
  }
  
}
