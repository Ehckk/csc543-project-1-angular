import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Post from '../models/Post';
import { FormErrors, PostPartial, PostResponse } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  errors = new Map<string, string>()
  posts: PostPartial[] = []
  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("posts").subscribe((res) => {
      console.log(res);
      this.posts = res as PostPartial[]
    })
  }

  create(body: Post) {
    this.errors.clear()
    return this.http.post("posts/new", body).subscribe({
      next: () => {},
      error: (err) => {
        const errors = err.error as FormErrors<Post>
        for (const [key, value] of Object.entries(errors)) {
          this.errors.set(key, value)
        }
      }
    }) 
  }
}
