import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header/header';
import { Banner } from "./components/banner/banner";
import { Footer } from './core/layout/footer/footer';
import { PopularCategories } from './components/popular-categories/popular-categories';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Banner,Footer,PopularCategories],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('foodezy');
}
