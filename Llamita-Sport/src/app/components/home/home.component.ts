import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { CartService } from '../../services/cart.service';
declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  count;
  constructor(private fb: FormBuilder, private cs: CartService, private router: Router, private us: UsersService) {

  }
  
  ngOnInit() {
    this.getCartNumber();
  }

  getCartNumber() {
    // this.cs.getCartNumber();
    this.count = this.cs.getCartNumber();
  }
}
