import { NgClass } from '@angular/common';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-like-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './like-button.component.html',
  styleUrl: './like-button.component.css'
})
export class LikeButtonComponent {
  clicked = output()
}
