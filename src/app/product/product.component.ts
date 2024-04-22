import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Router } from '@angular/router';
import { CartDataService } from '../services/cart-data.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    HttpClientModule,
    NgFor,
    NgClass,
    CurrencyPipe,
    NgIf,
    FormsModule,
    FilterPipe,
  ],
  providers: [FoodService, Router, CartDataService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  loading: boolean = true;
  meals: any[] = [];
  filteredMeals: any[] = [];
  searchTerm: any = '';
  constructor(
    private val: FoodService,
    private Route: Router,
    private cart: CartDataService
  ) {}
  getStarArray(rating: number): number[] {
    return Array(rating)
      .fill(0)
      .map((x, i) => i);
  }

  addToCart(food: any) {
    const existingCartItem = this.cart.getCartItem(food.idMeal);

    if (existingCartItem) {
      existingCartItem.quantity++;
      this.cart.updateCartItem(existingCartItem);
    } else {
      this.cart.addToCart(food);
    }
    this.Route.navigate(['/cart']);
  }

  ngOnInit() {
    console.log('start product')
    this.val.getFood().subscribe(
      (res) => {
        this.loading = false;
        console.log(res);
        this.meals = res.meals;
        this.filteredMeals = this.meals;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    console.log('end product')
  }
  filterMeals() {
    if (!this.searchTerm) {
      this.filteredMeals = this.meals;
    } else {
      this.filteredMeals = this.meals.filter((meal) =>
        meal.strMeal.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
