import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'other-events',
  template: `
    <section class="mt-10">
      <h2 class="mb-4 text-lg font-semibold tracking-tight">También te puede interesar</h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          class="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/10"
        >
          <div class="relative aspect-[16/10]">
            <img
              class="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1518112166137-85f9979a43aa?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div class="absolute left-3 top-3">
              <div
                class="flex flex-col items-center rounded-xl bg-black/70 px-2 py-1 ring-1 ring-white/15"
              >
                <span class="text-[10px] font-bold tracking-wide text-neutral-200">NOV</span>
                <span class="text-lg font-extrabold leading-none text-white">02</span>
              </div>
            </div>
          </div>
          <div class="p-4">
            <h3 class="line-clamp-2 text-base font-semibold tracking-tight">
              Boogie Lights w/ Live Sax
            </h3>
            <p class="mt-1 text-sm text-neutral-300">Hør Hør • 22:00</p>
          </div>
        </article>
        <!-- dupes… -->
      </div>
    </section>
  `,
})
export class OtherEventsComponent {}
