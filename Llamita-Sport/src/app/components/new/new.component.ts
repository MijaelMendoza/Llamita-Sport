import { Component, OnInit } from '@angular/core';
import { CategoryAndProductsService } from '../../services/category-and-products.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
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
