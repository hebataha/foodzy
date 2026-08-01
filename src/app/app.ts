import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header/header';
import { Banner } from "./components/banner/banner";
import { Footer } from './core/layout/footer/footer';
import { PopularCategories } from './components/popular-categories/popular-categories';
import { BestSells } from "./components/best-sells/best-sells";
import { Deals } from "./components/deals/deals";
import { ChooseUs } from './components/choose-us/choose-us';
import { Newsletter } from "./components/newsletter/newsletter";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Banner, Footer, PopularCategories, BestSells, Deals, ChooseUs, Newsletter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('foodezy');
}
