import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="border-t border-white/10 bg-neutral-950/80">
      <div
        class="mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-400 flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
      >
        <p>© {{ currentYear }} Festiva</p>
        <div class="flex items-center gap-4">
          <a routerLink="/terms" class="hover:text-white">Términos</a>
          <a routerLink="/privacy" class="hover:text-white">Privacidad</a>
          <a routerLink="/contact" class="hover:text-white">Contacto</a>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}
