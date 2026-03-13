import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'event-gradients',
  imports: [],
  template: `
    <div class="pointer-events-none absolute inset-0 opacity-60">
      <div
        class="absolute -top-24 -left-32 h-72 w-72 rounded-full blur-3xl"
        style="
          background: radial-gradient(60% 60% at 50% 50%, rgba(244, 63, 94, 0.55), transparent 70%);
        "
      ></div>
      <div
        class="absolute -bottom-24 -right-32 h-72 w-72 rounded-full blur-3xl"
        style="
          background: radial-gradient(
            60% 60% at 50% 50%,
            rgba(168, 85, 247, 0.45),
            transparent 70%
          );
        "
      ></div>
    </div>
  `,
})
export class EventGradientsComponent {}
