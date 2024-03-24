import { Component } from '@angular/core';
import Credentials from '../../models/Credentials';
import { LoginFormComponent } from '../../forms/login-form/login-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  model = new Credentials()

  constructor (

  ) {}
}
