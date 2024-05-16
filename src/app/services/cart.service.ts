import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  sendCart: object;
  count: number;

  constructor(private http: HttpClient) { }

  

  public saveCart(cart: object): void {
    this.sendCart = cart;
  }
  public getCart() {
    return this.sendCart;
  }
  public saveCartNumber(count: number): void {
    this.count = count;
  }
  public getCartNumber() {
    return this.count;
  }

}







