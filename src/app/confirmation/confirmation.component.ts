import { CurrencyPipe, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [NgIf,RouterModule,RouterLink,CurrencyPipe,UpperCasePipe],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  success!: boolean;
  responseData: any;


  constructor(private route: ActivatedRoute,private router :Router) { }
   continueShop(){
    sessionStorage.removeItem('cartItems')
    this.router.navigate(['products'])
   }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.success = params['success'] === 'true';
      this.responseData = JSON.parse(params['data']);
    });
    console.log(this.responseData);
  }

}