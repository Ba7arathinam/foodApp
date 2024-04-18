import { style } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CartDataService } from '../services/cart-data.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [RouterModule,CurrencyPipe],
  providers:[CartDataService],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;
 totalAmount!:number;
constructor(private Route:Router,private payment:CartDataService){}
ngOnInit(): void {
this.totalAmount=this.payment.getTotalAmount()
console.log(window.paypal)
window.paypal.Buttons(
 { style:{
    layout:'horizontal',
    shape:'rect',
    lable:'paypale'
  },
  createOrder:(data:any,actions:any)=>{
    return actions.order.create({
      purchase_units:[
        {
          amount:{
            value:this.totalAmount.toString(),
            currency_code:'USD'
          }
        }
      ]
    })
  },
  onApprove:(data:any,actions:any)=>{
    return actions.order.capture().then((details:any)=>{
     if(details.status=='COMPLETED'){
      this.payment.transactionID=details.id
      this.Route.navigate(['confirmation'])
     }
    })
  },
  onError:(e:any)=>{
    console.log(e);
    
  }
}
).render(this.paymentRef.nativeElement)
  
}
}
