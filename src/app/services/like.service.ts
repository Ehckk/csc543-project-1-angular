import { Injectable } from '@angular/core';
import { FormErrors, LikePartial, Post } from '../types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  errors = new Map<string, string>()
  
  constructor(private http: HttpClient) { }

  add(post_id: number) {
    this.errors.clear()
    return this.http.post("likes/add", { post_id }).subscribe({
      next: () => {},
      error: (err) => {
        const errors = err.error as FormErrors<LikePartial>
        for (const [key, value] of Object.entries(errors)) {
          this.errors.set(key, value)
        }
      }
    }) 
  }

  remove(post_id: number) {
    this.errors.clear()
    return this.http.put("likes/remove", { post_id }).subscribe({
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
