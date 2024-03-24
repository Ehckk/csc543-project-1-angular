import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { PostFormComponent } from '../../forms/post-form/post-form.component';
import { PostComponent } from '../../components/post/post.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [PostFormComponent, PostComponent, NgForOf],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  post = inject(PostService)
  
  constructor(private router: Router) {
    if (!localStorage.getItem("access")) {
      this.router.navigate(['/login'])
    }
    this.post.getAll()
  }

  updatePosts() {
    this.post.getAll()
  }
}
