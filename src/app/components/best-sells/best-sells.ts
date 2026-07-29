import { Component , CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild} from '@angular/core';
import { Ads } from './ads/ads';
import { ShoppingCard } from "./shopping-card/shopping-card";

@Component({
  selector: 'app-best-sells',
  imports: [Ads, ShoppingCard],
  templateUrl: './best-sells.html',
  styleUrl: './best-sells.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class BestSells {
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
    slidesPerView: 1,
    spaceBetween: 30,
  };

 
}
  nextSlide() {
    // 👈 استدعاء ميثود الانتقال للسلايد التالي
    this.swiperEl.nativeElement.swiper.slideNext();
  }
}
