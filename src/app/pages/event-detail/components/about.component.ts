import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'event-about',
  imports: [],
  template: `
    <article class="w-full max-w-full rounded-2xl bg-neutral-900/60 border border-white/10 p-3 sm:p-5 box-border">
      <h2 class="text-lg font-semibold tracking-tight">About the event</h2>
      <p class="mt-3 text-neutral-300 leading-relaxed whitespace-pre-line break-words">
        {{ description || 'Description not available.' }}
      </p>
    </article>
  `,
})
export class EventAboutComponent {
  @Input({ required: true }) description?: string;
}
