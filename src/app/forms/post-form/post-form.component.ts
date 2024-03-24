import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import models from '../../models';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: '../form.component.css'
})
export class PostFormComponent {
  model = new models.Post()
}
