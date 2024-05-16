import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRootRoutingModule } from './Routings/root.routing.module';
import { AccountRoutingModule } from './Routings/account.routing.module';
import { HttpClientModule } from '@angular/common/http';

// components

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewComponent } from './components/new/new.component';
import { PopularComponent } from './components/popular/popular.component';
import { MostSoldComponent } from './components/most-sold/most-sold.component';
import { HotDealsComponent } from './components/hot-deals/hot-deals.component';
import { AdminComponent } from './components/admin/admin.component';
import { AccountComponent } from './components/account/account.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DisCatProComponent } from './components/dis-cat-pro/dis-cat-pro.component';
import { AddressComponent } from './components/address/address.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';


// providers

import { UsersService } from './services/users.service';
import { CategoryAndProductsService } from './services/category-and-products.service';
import { AddressService } from './services/address.service';
import { PaymentService } from './services/payment.service';
import { CartService } from './services/cart.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    PopularComponent,
    MostSoldComponent,
    HotDealsComponent,
    AdminComponent,
    AccountComponent,
    ProductCategoryComponent,
    ProfileComponent,
    DisCatProComponent,
    AddressComponent,
    PaymentComponent,
    CheckoutComponent,
    CartComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AccountRoutingModule,
    AppRootRoutingModule,
    HttpClientModule

  ],
  providers: [UsersService, CategoryAndProductsService, AddressService, PaymentService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
