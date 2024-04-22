import { style } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CartDataService } from '../services/cart-data.service';
import { CurrencyPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [RouterModule,CurrencyPipe,HttpClientModule],
  providers:[CartDataService],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
 
 totalAmount!:number;
 
constructor(private Route:Router,private payment:CartDataService,private http:HttpClient){
  this.totalAmount=this.payment.getTotalAmount()
}
//PhonePe
PhonePe():any{
  this.http.get<any>('http://localhost:8080/pay?amount=' + this.totalAmount)
  .subscribe(
    (response) => {
      // Handle success response, if needed
      window.location.href =response
    },
    (error) => {
      // Handle error response
      console.error('Error initiating payment:', error);
    }
  );
}

}
