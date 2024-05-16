import { Component, OnInit } from '@angular/core';
import { CategoryAndProductsService } from '../../services/category-and-products.service';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  productandcats: string;
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
