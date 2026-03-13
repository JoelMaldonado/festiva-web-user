import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'eventos-destacados',
  template: ` <section class="mx-auto max-w-7xl px-4 py-8">
    <h2 class="mb-4 text-lg font-semibold tracking-tight">Destacados</h2>
    <div class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar">
      <!-- Card wide -->
      <article
        class="min-w-[85%] sm:min-w-[60%] lg:min-w-[40%] snap-start relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/10"
      >
        <div class="relative aspect-[16/7]">
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1400&auto=format&fit=crop"
            alt="Featured party"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent"
          ></div>
          <div class="absolute left-4 bottom-4 right-4">
            <div class="mb-2">
              <span
                class="rounded-full bg-pink-500/90 px-2.5 py-1 text-xs font-semibold ring-1 ring-pink-400/60"
              >
                Techno / House
              </span>
            </div>
            <h3 class="text-xl font-bold">Warehouse Secret Night</h3>
            <p class="text-sm text-neutral-300">SALT — Art & Music • 23:00</p>
          </div>
        </div>
      </article>

      <!-- Duplicados de ejemplo -->
      <article
        class="min-w-[85%] sm:min-w-[60%] lg:min-w-[40%] snap-start relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/10"
      >
        <div class="relative aspect-[16/7]">
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1518112166137-85f9979a43aa?q=80&w=1400&auto=format&fit=crop"
            alt="Featured party"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent"
          ></div>
          <div class="absolute left-4 bottom-4 right-4">
            <div class="mb-2">
              <span
                class="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium ring-1 ring-white/20"
              >
                Disco / Funk
              </span>
            </div>
            <h3 class="text-xl font-bold">Boogie Lights w/ Live Sax</h3>
            <p class="text-sm text-neutral-300">Hør Hør • 22:00</p>
          </div>
        </div>
      </article>

      <article
        class="min-w-[85%] sm:min-w-[60%] lg:min-w-[40%] snap-start relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/10"
      >
        <div class="relative aspect-[16/7]">
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1444824775686-4185f172c44b?q=80&w=1400&auto=format&fit=crop"
            alt="Featured party"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent"
          ></div>
          <div class="absolute left-4 bottom-4 right-4">
            <div class="mb-2">
              <span
                class="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium ring-1 ring-white/20"
              >
                Latin
              </span>
            </div>
            <h3 class="text-xl font-bold">Samba Explosion: En kveld i Rio</h3>
            <p class="text-sm text-neutral-300">The Broker • 18:30</p>
          </div>
        </div>
      </article>
    </div>
  </section>`,
})
export class EventosDestacadosComponent {}
