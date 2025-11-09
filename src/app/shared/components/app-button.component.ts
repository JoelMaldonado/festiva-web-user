import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-button',
  imports: [CommonModule],
  template: `
    <button class="rounded-xl px-4 py-2.5" (click)="onClicked()" [ngClass]="styleClasses">
      {{ label }}
    </button>
  `,
})
export class AppButtonComponent {
  @Input() type: 'primary' | 'outlined' = 'primary';
  @Input({ required: true }) label!: string;
  @Output() clicked = new EventEmitter<void>();

  get styleClasses(): string {
    switch (this.type) {
      case 'primary':
        return 'bg-pink-500 text-sm font-semibold shadow hover:bg-pink-400 ring-1 ring-pink-400/60';
      case 'outlined':
        return 'bg-white/5 text-sm border border-white/10 hover:bg-white/10';
      default:
        return '';
    }
  }

  onClicked() {
    this.clicked.emit();
  }
}
