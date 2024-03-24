import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { UserService } from '../../services/user.service';
import models from '../../models';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: '../form.component.css'
})
export class LoginFormComponent {
  model = new models.Credentials()
  user = inject(UserService)
  submitted = false

  constructor() {}

  onSubmit() {
    console.log(this.model);
    this.submitted = true
    this.user.login(this.model)
  }
}
