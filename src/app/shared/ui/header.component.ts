import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [],
  template: `
    <header
      class="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/80 border-b border-white/10"
    >
      <div class="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
        <!-- Logo -->
        <a href="#" class="group inline-flex items-center gap-2">
          <div
            class="h-8 w-8 rounded-xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 ring-2 ring-pink-400/50 glow-pink"
          ></div>
          <span class="text-lg font-semibold tracking-tight ">
            <span class="text-white">Festiva</span>
            <span class="text-pink-400 glow-soft">Events</span>
          </span>
        </a>

        <nav class="ml-2 text-sm text-neutral-400 hidden md:block">
          <a routerLink="/" class="hover:text-white/90">Inicio</a>
          <span class="mx-2">/</span>
          <a routerLink="/oslo/eventos" class="hover:text-white/90">Eventos</a>
          <span class="mx-2">/</span>
          <span class="text-white/80 align-middle">Evento</span>
        </nav>

        <div class="ml-auto hidden md:flex items-center gap-3">
          <!-- Mock search -->
          <div class="relative">
            <input
              type="text"
              placeholder="Search events, clubs, DJs…"
              class="w-72 rounded-xl bg-neutral-900/80 border border-white/10 px-4 py-2.5 pr-10
                   placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-pink-500/60"
            />
            <svg
              class="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23A6.5 6.5 0 1 0 9.5 16a6.471 6.471 0 0 0 4.23-1.57l.27.28v.79L20 21.5 21.5 20l-6-6zM4 9.5A5.5 5.5 0 1 1 9.5 15 5.506 5.506 0 0 1 4 9.5Z"
              />
            </svg>
          </div>
          <a
            href="#"
            class="rounded-xl bg-pink-500 px-4 py-2.5 text-sm font-semibold shadow
                  hover:bg-pink-400 ring-1 ring-pink-400/60
                  drop-shadow-[0_0_16px_rgba(244,63,94,0.55)]"
          >
            Submit event
          </a>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {}
