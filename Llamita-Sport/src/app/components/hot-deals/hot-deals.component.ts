import { Component, OnInit } from '@angular/core';
import { CategoryAndProductsService } from '../../services/category-and-products.service';
@Component({
  selector: 'app-hot-deals',
  templateUrl: './hot-deals.component.html',
  styleUrls: ['./hot-deals.component.css']
})
export class HotDealsComponent implements OnInit {
  productandcats;

  constructor(private cps: CategoryAndProductsService) { }

  ngOnInit() {
    this.getProductsandCats();
  }
  getProductsandCats(): void {
    this.cps.getProductsandCats().subscribe(data => {
      this.productandcats = data.productsandcat;
    });

  }

}
