import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  form: FormGroup;
  payments: Array<any> = [];
  constructor(private fb: FormBuilder, private ps: PaymentService) {
  }

  ngOnInit() {
  }

}
