import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `
    <input type="text" [(ngModel)]="username"/>
  `
})
export class LoginComponent {
  constructor (

  ) {}
}
