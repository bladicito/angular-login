import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentUsername = '';
  currentPassword = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(e: Event, username: string, password: string) {
    e.preventDefault();
    this.currentUsername = username;
    this.currentPassword = password;
  }

}
