import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild ,signal } from '@angular/core';
import { Ads } from './ads/ads';
import { ShoppingCard } from "./shopping-card/shopping-card";
import { ProductService } from '../../core/services/core/services/product';
import { Products } from './products';
import { Loader } from "../../core/layout/loader/loader";

@Component({
  selector: 'app-best-sells',
  imports: [Ads, ShoppingCard, Loader],
  templateUrl: './best-sells.html',
  styleUrl: './best-sells.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BestSells implements OnInit {
  constructor(private _Product: ProductService) {
  }


  data = signal<any[]>([]);
  errorMsg = signal<any>(null);
  isLoading = signal(true);
  ngOnInit(): void {

    this._Product.getAllProducts().subscribe({
      next: (res: any) => {
        this.data.set(res.products);
        this.isLoading.set(false);
        console.log(this.data)


      },
      error: (err) => {
        console.log(err.message);
        this.errorMsg.set(err);
        this.isLoading.set(false) ;

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
