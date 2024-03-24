import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import models from '../../models';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrl: '../form.component.css'
})
export class LoginFormComponent {
  model = new models.Credentials()
  submitted = false

  onSubmit() {
    this.submitted = true
  }
}
