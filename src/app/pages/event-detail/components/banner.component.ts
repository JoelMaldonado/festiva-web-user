import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Lightbox, LightboxModule } from 'ngx-lightbox';

@Component({
  standalone: true,
  selector: 'event-banner',
  imports: [CommonModule, LightboxModule],
  template: `
    <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
      <div class="aspect-[16/9] md:aspect-[21/9] relative">
        @if (eventImageUrl) {
          <img
            [src]="eventImageUrl"
            alt="Event cover"
            class="h-full w-full object-cover bg-neutral-800 mx-auto cursor-pointer hover:scale-105 transition-transform duration-300"
            (click)="openLightbox()"
          />
        }
      </div>
    </div>
  `,
})
export class EventBannerComponent {
  @Input({ required: true }) eventImageUrl?: string;

  constructor(private lightbox: Lightbox) {}

  openLightbox() {
    if (!this.eventImageUrl) return;

    this.lightbox.open([{ src: this.eventImageUrl, caption: '', thumb: this.eventImageUrl }], 0);
  }
}
