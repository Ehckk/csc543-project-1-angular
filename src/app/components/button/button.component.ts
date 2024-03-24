import { Component, computed, EventEmitter, input, output, Output } from '@angular/core';

type ButtonSize = "large" | "small"

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  type = input<HTMLButtonElement['type']>('button')
  text = input('')
  size = input<ButtonSize>('small')
  disabled = input<boolean>(false)
  className = computed(() => `btn-${this.size()}`)
  clicked = output()
}
