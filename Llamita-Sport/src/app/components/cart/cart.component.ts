import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Array<any> = [];
  count;

  constructor(private cs: CartService) { }

  ngOnInit() {
    this.getCartObjects();
    this.getCartNumber();

  }

  getCartNumber() {
    // this.cs.getCartNumber();
    this.count = this.cs.getCartNumber();
  }

  getCartObjects() {
    if (this.cs.getCart()) {
      this.cart.push(this.cs.getCart());
    }
  }

}
