import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'event-about',
  imports: [],
  template: `
    <article class="rounded-2xl bg-neutral-900/60 border border-white/10 p-5">
      <h2 class="text-lg font-semibold tracking-tight">About the event</h2>
      <p class="mt-3 text-neutral-300 leading-relaxed whitespace-pre-line">
        {{ description || 'Description not available.' }}
      </p>
    </article>
  `,
})
export class EventAboutComponent {
  @Input({ required: true }) description?: string;
}
