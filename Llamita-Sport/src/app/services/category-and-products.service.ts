import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryAndProductsService {
  array: Array<any> = [];
  array1: Array<any> = [];
  domain = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }

  public saveCategoryandProducts(value: object): void {
    this.array.push(value);
    this.array1.push(value);
  }

  public getCategoryandProducts() {
    return this.array;
  }
  
  public getCategoryandProducts1() {
    return this.array1;
  }
  
  public createProductsandCats(productsandCats: any): Observable<any> {
    return this.http.post(this.domain + '/productApi/insertProducts', productsandCats).pipe(
      map((res: any) => res)
    );
  }
  
  public getProductsandCats(): Observable<any> {
    return this.http.get(this.domain + '/productApi/getProducts').pipe(
      map((res: any) => res)
    );
  }
  
  public getEachProduct(id: string): Observable<any> {
    return this.http.get(this.domain + '/productApi/getEachProducts' + id).pipe(
      map((res: any) => res)
    );
  }
}
