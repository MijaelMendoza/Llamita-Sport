import { Component, OnInit } from '@angular/core';
import { CategoryAndProductsService } from '../../services/category-and-products.service';

@Component({
  selector: 'app-dis-cat-pro',
  templateUrl: './dis-cat-pro.component.html',
  styleUrls: ['./dis-cat-pro.component.css']
})
export class DisCatProComponent implements OnInit {
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
