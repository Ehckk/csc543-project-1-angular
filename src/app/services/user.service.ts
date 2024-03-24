import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Credentials from '../models/Credentials';
import { FormErrors, TokenResponse } from '../types/Utils';
import Registration from '../models/Registration';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  errors = new Map<string, string>()

  constructor(private http: HttpClient, private router: Router) { }

  login(body: Credentials) {
    this.errors.clear()
    return this.http.post("login", body).subscribe({
      next: res => {
        const { access } = res as TokenResponse 
        localStorage.setItem("access", access)
        this.router.navigate(["/posts"])
      },
      error: (err) => {
        const errors = err.error as FormErrors<Credentials>
        for (const [key, value] of Object.entries(errors)) {
          this.errors.set(key, value)
          
        }
      }
    })
  }

  register(body: Registration) {
    this.errors.clear()
    return this.http.post("register", body).subscribe({
      next: (res) => {
        const { access } = res as TokenResponse 
        localStorage.setItem("access", access)
        this.router.navigate(["/posts"])
      },
      error: (err) => {
        const errors = err.error as FormErrors<Registration>
        for (const [key, value] of Object.entries(errors)) {
          this.errors.set(key, value)
        }
      }
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["/logout"])
  }
}
