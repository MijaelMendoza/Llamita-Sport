import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  form: FormGroup;
  address: Array<any> = [];

  constructor(private fb: FormBuilder, private as: AddressService) {
    this.createAddress();
  }

  ngOnInit() {
    this.address = this.as.getAddresses(); // Cambiar 'getAdresses' a 'getAddresses'
  }

  createAddress(): void {
    this.form = this.fb.group({
      fullname: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      zip: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmitAddress(): void {
    const address = {
      fullname: this.form.get('fullname').value,
      country: this.form.get('country').value,
      state: this.form.get('state').value,
      city: this.form.get('city').value,
      address: this.form.get('address').value,
      zip: this.form.get('zip').value,
      phone: this.form.get('phone').value,
    };
    this.as.saveAddresses(address); // Cambiar 'saveAdresses' a 'saveAddresses'
  }
}
