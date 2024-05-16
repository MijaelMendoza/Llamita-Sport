import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SimpleChanges } from '@angular/core';
declare var jQuery: any;
declare var $: any;

// service
import { CategoryAndProductsService } from '../../services/category-and-products.service';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  form: FormGroup;
  categories: Array<any> = [];
  @Input() cats;
  message: string;
  constructor(private fb: FormBuilder, private categoryandproducts: CategoryAndProductsService) {
    this.createProductandCategoryForm();
  }

  ngOnInit() {
    this.clearingUpTheSelectCategoryOption();
  }
  clearingUpTheSelectCategoryOption(): void {
    this.categories.forEach(element => {
      if (element.category === null) {
        const index = this.categories.indexOf(element);
        this.categories.splice(index, 1);
      }
    });
  }


  createProductandCategoryForm(): void {

    this.form = this.fb.group({
      category: ['', Validators.required],
      product: [null, Validators.compose([
        Validators.required,
      ])],
      price: [null, Validators.compose([
        Validators.required,
      ])],
      formerprice: [null, Validators.compose([
      ])],
      quantity: [null, Validators.compose([
        Validators.required,
      ])],
      selectcategory: ['', Validators.compose([
        Validators.required,
      ])],
      info: [null, Validators.compose([
        Validators.required,
      ])],
      shipping: [null, Validators.compose([Validators.required])],
      image: [null, Validators.compose([
        Validators.required,
      ])]
    });

  }

  selectcategoryChange(event): void {
    const selectedCat = this.form.get('selectcategory');
    const category = this.form.get('category');
    if (event) {
      category.disable();
    } else {
      category.enable();
    }
  }

  categoryChange(event): void {
    const category = this.form.get('category');
    const selectedCat = this.form.get('selectcategory');

    if (event) {
      selectedCat.disable();
    } else {
      selectedCat.enable();
    }
  }

  submitForm(): void {
    const items = {
      category: this.form.get('category').value,
      product: this.form.get('product').value,
      price: this.form.get('price').value,
      quantity: this.form.get('quantity').value,
      selectcategory: this.form.get('selectcategory').value,
      info: this.form.get('info').value,
      shipping: this.form.get('shipping').value,
      formerprice: this.form.get('formerprice').value,
      image: this.form.get('image').value,
    };
    this.categoryandproducts.saveCategoryandProducts(items);
    this.categoryandproducts.createProductsandCats(items).subscribe(data => {
      if (data.success) {
        this.message = data.message;
      } else {
        this.message = data.message;
      }

    });
    this.form.reset();
    this.clearingUpTheSelectCategoryOption();

  }

}

