import { Component, inject } from '@angular/core';
import models from '../../models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, RouterLink],
  templateUrl: './register-form.component.html',
  styleUrl: '../form.component.css'
})
export class RegisterFormComponent {
  model = new models.Registration()
  user = inject(UserService)
  submitted = false

  constructor() {}

  onSubmit() {
    console.log(this.model);
    this.submitted = true
    this.user.register(this.model)
  }
}
