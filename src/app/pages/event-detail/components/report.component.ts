import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'event-report',
  imports: [],
  template: `
    <div class="rounded-2xl bg-neutral-900/60 border border-white/10 p-5">
      <h3 class="text-sm font-semibold text-neutral-200">¿Algo que corregir?</h3>
      <p class="mt-1 text-sm text-neutral-300">Si ves un error en este evento, avísanos.</p>
      <button
        class="mt-3 w-full rounded-xl bg-white/5 px-4 py-2.5 text-sm border border-white/10 hover:bg-white/10"
      >
        Reportar evento
      </button>
    </div>
  `,
})
export class EventReportComponent {
    
}
