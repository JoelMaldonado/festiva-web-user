import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'event-banner',
  imports: [CommonModule],
  template: `
    <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
      <div class="aspect-[16/9] md:aspect-[21/9] relative">
        @if (eventImageUrl) {
        <img
          [src]="eventImageUrl"
          [alt]="eventTitle || 'Event cover'"
          class="h-full w-full object-contain bg-neutral-800 mx-auto"
        />
        }

        <div
          class="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-neutral-950/10 to-transparent"
        ></div>
        <!-- Date pill -->
        @if (nextDate) {
        <div class="absolute right-4 top-4">
          <div
            class="flex flex-col items-center rounded-xl bg-black/70 px-2 py-1 ring-1 ring-white/15"
          >
            <span class="text-[10px] font-bold tracking-wide text-neutral-200">
              {{ nextDate | date : 'MMM' | uppercase }}
            </span>
            <span class="text-lg font-extrabold leading-none text-white">
              {{ nextDate | date : 'd' }}
            </span>
          </div>
        </div>
        }
        <!-- Title over image (mobile) -->
        <div class="absolute left-4 bottom-4 right-4 md:hidden">
          <h1 class="text-2xl font-extrabold leading-tight drop-shadow">
            {{ eventTitle }}
          </h1>
          <p class="text-sm text-neutral-300">
            @if (clubName) {
            <span>{{ clubName }}</span>
            } @if (clubName && nextDate) {
            <span class="mx-1 text-neutral-500">•</span>
            } @if (nextDate) {
            <time class="tabular-nums"> {{ nextDate | date : 'EEE d MMM, HH:mm' }} </time>
            }
          </p>
        </div>
      </div>
    </div>
  `,
})
export class EventBannerComponent {
  @Input({ required: true }) eventTitle?: string;
  @Input({ required: true }) eventImageUrl?: string;
  @Input({ required: true }) clubName?: string;
  @Input({ required: true }) nextDate?: Date;
}
