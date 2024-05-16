import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PaymentService {

  array: Array<any> = [];
  constructor(private http: HttpClient) { }

  public savePayment(value: object): void {
    this.array.push(value);
  }

  public getPayment() {
    return this.array;
  }

}
