import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  showMenuMob: boolean = false;

  toggleMenu() {
    this.showMenuMob = !this.showMenuMob;
    console.log(this.showMenuMob);
    
  }
}
