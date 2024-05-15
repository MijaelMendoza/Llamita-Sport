import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
declare var jquery: any;
declare var $: any;
function matchingPasswords(c: AbstractControl) {
  return (c.get('password').value === c.get('password1').value) ? null : { 'nomatch': true };
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  form: FormGroup;
  loginform: FormGroup;
  browserUser;
  @Input() input: number;

  constructor(private fb: FormBuilder, private router: Router, private us: UsersService) {
    this.loginForm();
    this.createUsersForm();

  }

  ngOnInit() {
    this.fixTheNavBar();
  }
  loginForm() {
    this.loginform = this.fb.group({

      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]

    });
  }
  createUsersForm() {
    this.form = this.fb.group({
      fullname: ['', Validators.required],
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        this.validateUsername
      ])],
      phone: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required,
        this.validateEmail
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        this.validatePassword
      ])],
      verify: ['', Validators.required]

    }, { Validator: matchingPasswords });
  }

  validateUsername(controls) {
    const usernameFormate = new RegExp(/^[a-zA-Z0-9]+$/);
    if (usernameFormate.test(controls.value)) {
      return null;

    }
    // tslint:disable-next-line:one-line
    else {
      return { 'validateUsername': true };
    }
  }
  validateEmail(controls) {
    // tslint:disable-next-line:max-line-length
    const emailFormate = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (emailFormate.test(controls.value)) {
      return null;
    } else {
      return { 'validateEmail': true };
    }
  }
  validatePassword(controls) {
    const passwordFormate = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,20}$/);
    if (passwordFormate.test(controls.value)) {
      return null;
    } else {
      return { 'validatePassword': true };
    }
  }


  onRegister() {
    const user = {
      fullname: this.form.get('fullname').value,
      email: this.form.get('email').value,
      username: this.form.get('username').value,
      password: this.form.get('password').value,
      phone: this.form.get('phone').value
    };
    this.form.reset();
    $('#register-modal').modal('hide');

    this.router.navigate(['/account']);

  }

  onLogin() {
    const user = {
      email: this.loginform.get('email').value,
      password: this.loginform.get('password').value
    };
    this.browserUser = JSON.parse(this.browserUser);

    // for now use simple logic to simulate login
    if (user.email === this.browserUser.email) {
      if (user.password === this.browserUser.password) {
        $('#login-modal').modal('hide');
        this.router.navigate(['account']);

      }
    }
    // tslint:disable-next-line:one-line
    else {
      console.log('do nothing err');
    }

  }
  fixTheNavBar() {

    const nav2 = document.querySelector('#fixed');
    const nav = document.querySelector('nav');

    $(window).scroll(() => {
      const distance = $(nav).height() + $(nav2).height() + 30;
      const docHeight = $(document).scrollTop();
      if (docHeight > distance) {
        $('#fixed').addClass('fixed');
      } else {
        $('#fixed').removeClass('fixed');
      }

    });



  }

}
