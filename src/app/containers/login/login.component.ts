import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passwordField = '';
  emailField = '';
  strongPassword  = false;
  emailValid = false;
  emailEmpty = true;
  passwordEmpty = true;


  constructor() { }

  ngOnInit() {
    this.formProperlyFilledIn();
  }

  formProperlyFilledIn() {
    console.log(this.emailValid && this.strongPassword);
    return this.emailValid && this.strongPassword;
  }

  UpdateEmail(evt) {
    evt.target.value.length > 0 ? this.emailEmpty = false : this.emailEmpty = true;
    const userInput = evt.target.value;
    this.emailValid =  userInput.indexOf('@') !== -1 && userInput.indexOf('.') !== -1;

    return this.emailValid;
  }

  UpdatePassword(evt) {
    evt.target.value.length > 0 ? this.passwordEmpty = false : this.passwordEmpty = true;
    this.strongPassword = evt.target.value.length > 8;

    return this.strongPassword;
  }

  onSubmit(e: Event, username: string, password: string) {
    e.preventDefault();
    this.passwordField = password;
    this.emailField = username;
  }
}
