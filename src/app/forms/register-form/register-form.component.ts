import { Component } from '@angular/core';
import models from '../../models';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [],
  templateUrl: './register-form.component.html',
  styleUrl: '../form.component.css'
})
export class RegisterFormComponent {
  model = new models.Registration()
}
