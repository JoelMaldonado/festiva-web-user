import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'event-report',
  imports: [],
  template: `
    <div class="rounded-2xl bg-neutral-900/60 border border-white/10 p-5">
      <h3 class="text-sm font-semibold text-neutral-200">Something to correct?</h3>
      <p class="mt-1 text-sm text-neutral-300">If you see an error in this event, let us know.</p>
      <button
        class="mt-3 w-full rounded-xl bg-white/5 px-4 py-2.5 text-sm border border-white/10 hover:bg-white/10"
      >
        Report event
      </button>
    </div>
  `,
})
export class EventReportComponent {
    
}
