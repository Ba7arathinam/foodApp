import { Component } from '@angular/core';
import { CartDataService } from '../services/cart-data.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import {MatIcon} from '@angular/material/icon'
import { CartItem } from '../shared/model/cartItems';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe,NgIf,NgFor,MatIcon,FormsModule,RouterModule],
  providers:[CartDataService],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: CartItem[] = [];
  totalAmount: number = 0;


  constructor(private cartService: CartDataService,private route:Router) {}

  ngOnInit(): void {
    console.log('start cart')
    this.cartItems = this.cartService.getCartItems();
    this.totalAmount = this.cartService.getTotalAmount();
    console.log('end cart')
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCartItem(item);
    }
  }

  increaseQuantity(item: CartItem) {
    item.quantity++;
    this.updateCartItem(item);
  }

  updateCartItem(item: CartItem) {
    let cartItems: CartItem[] = this.cartService.getCartItems();
    cartItems = cartItems.map(cartItem => {
      if (cartItem.food.idMeal === item.food.idMeal) {
        return item;
      }
      return cartItem;
    });
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
  removeFromCart(item: CartItem) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems();
    this.totalAmount = this.cartService.getTotalAmount();
  }


  calculateAmount(item: CartItem): number {
    return item.food.amount * item.quantity;
  }
  payment(){
    this.route.navigate(['payment']);
  }
}
