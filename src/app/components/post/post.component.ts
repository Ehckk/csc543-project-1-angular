import { Component, computed, inject, input, output, signal } from '@angular/core';
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
  created = computed(() => {
    const created = this.post()?.created ?? ""
    const date = new Date(created)
    const dateStr = date.toLocaleDateString()
    const timeStr = date.toLocaleTimeString([], { hour: "2-digit", hour12: true, minute: "2-digit" })
    return `${dateStr} ${timeStr}`
  })
  has_liked = computed(() => Boolean(this.post()?.has_liked))
  like = inject(LikeService)
  update = output()

  likePost() {
    const post = this.post()
    const has_liked = this.has_liked()
    if (!post) return
    const { post_id } = post
    if (!has_liked) {
      this.like.add(post_id)
    } else {
      this.like.remove(post_id)
    }
    this.update.emit()
  }
}
