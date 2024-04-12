import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { title: 'Home' } },
    { path: 'products', component: ProductComponent, data: { title: 'Products' } },
    { path: 'cart', component: CartComponent, data: { title: 'Cart' } },
    { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
    { path: 'login', component: LoginComponent, data: { title: 'Login' } },
    { path: 'signup', component: SiginComponent, data: { title: 'Signup' } },
    { path: '**', redirectTo: 'login' }
];
