import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  constructor(private router: Router) {
    this.router.navigate(['/login'])
  }
}
