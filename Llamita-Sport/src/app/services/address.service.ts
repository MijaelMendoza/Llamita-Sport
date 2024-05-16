import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddressService {
  array: Array<any> = [];
  constructor(private http: HttpClient) { }

  public saveAddresses(value: object): void {
    this.array.push(value);
  }

  public getAddresses() {
    return this.array;
  }
}
