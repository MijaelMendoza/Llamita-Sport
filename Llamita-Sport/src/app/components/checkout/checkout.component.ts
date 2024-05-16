import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryAndProductsService } from '../../services/category-and-products.service';
import { CartService } from '../../services/cart.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  pro: any;
  count = 0;

  constructor(private route: ActivatedRoute, private cs: CartService, private router: Router, private cps: CategoryAndProductsService) {
    this.getEachProducts();
  }

  ngOnInit() {

  }

  addToCart(image, price, info, product) {

    this.count++;
    const cartObject = { image: image, price: price, info: info, product: product };
    this.cs.saveCart(cartObject);
    // console.log(this.count);
    this.cs.saveCartNumber(this.count);



  }

  getEachProducts(): void {
    if (this.route.snapshot.params['id']) {
      this.cps.getEachProduct(this.route.snapshot.params['id']).subscribe(data => {
        if (data.product) {
          this.pro = data.product;
          setTimeout(() => {
            $('.gif-container').css('display', 'none');
          }, 1000);
        } else {
          $('.gif-container').css('display', 'none');
          this.router.navigate(['home']);
        }
      });
    } else {
      $('.gif-container').css('display', 'none');
      this.router.navigate(['home']);

    }
  }

}
