import { Component, computed, inject, input, signal } from '@angular/core';
import { PostPartial } from '../../types';
import { LikeButtonComponent } from '../like-button/like-button.component';
import { LikeService } from '../../services/like.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [LikeButtonComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  post = input<PostPartial>()
  content = computed(() => this.post()?.content)
  author = computed(() => this.post()?.author)
  likes = computed(() => this.post()?.likes ?? [])
  created = computed(() => this.post()?.created)
  has_liked = signal(() => this.post()?.has_liked)
  like = inject(LikeService)

  likePost() {

  }
}
