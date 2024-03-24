import { Component, computed, EventEmitter, input, Output } from '@angular/core';

type ButtonSize = "large" | "small"

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  text = input('')
  size = input<ButtonSize>('small')
  className = computed(() => `btn-${this.size()}`)
  
  @Output() clicked = new EventEmitter() 

  onClicked(event: Event) {
    this.clicked.emit(event)
  }
}
