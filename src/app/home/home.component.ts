import { FoodService } from './../services/food/food.service';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,RouterLink,RouterLinkActive],
  providers:[FoodService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {




  

  
}
