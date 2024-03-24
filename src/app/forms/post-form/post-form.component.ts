import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import models from '../../models';
import { ButtonComponent } from '../../components/button/button.component';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  templateUrl: './post-form.component.html',
  styleUrl: '../form.component.css'
})
export class PostFormComponent {
  model = new models.Post()
  post = inject(PostService)
  
  submitted = false

  constructor() {}

  onSubmit() {
    console.log(this.model);
    this.submitted = true
    this.post.create(this.model)
    this.post.getAll()
  }
}
