import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FoodService } from './services/food/food.service';
import { FooterComponent } from './footer/footer.component';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,NgIf],
  providers:[FoodService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foodApp';

  get showHeader(): boolean {
    return !['/login', '/signup'].includes(window.location.pathname);
  }

  get showFooter(): boolean {
    return !['/login', '/signup'].includes(window.location.pathname);
  }

}
