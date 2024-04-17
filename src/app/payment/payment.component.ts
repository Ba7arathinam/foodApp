import { style } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;

ngOnInit(): void {
console.log(window.paypal)
window.paypal.Buttons(
 { style:{
    layout:'horizontal',
    shape:'rect',
    lable:'paypale'
  }}
).render(this.paymentRef.nativeElement)
  
}
}
