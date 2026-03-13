import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-chip',
  imports: [],
  template: ` <span class="rounded-full bg-white/5 px-3 py-1 text-xs ring-1 ring-white/10">
    {{ value }}
  </span>`,
})
export class AppChipComponent {
  @Input({ required: true }) value!: string;
}
