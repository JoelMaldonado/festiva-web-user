import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { AppButtonComponent } from '../../../shared/components/app-button.component';
import { AppChipComponent } from '../../../shared/components/app-chip.component';
import { EventService } from '../../../services/event.service';

@Component({
  standalone: true,
  selector: 'event-info',
  imports: [CommonModule, AppButtonComponent, AppChipComponent],
  template: `
    <aside class="rounded-2xl border border-white/10 bg-neutral-900/60 p-4 md:p-5 sticky top-20">
      <h1 class="hidden md:block text-2xl font-extrabold tracking-tight">
        {{ title }}
      </h1>

      <div class="mt-2 text-neutral-300 text-sm flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <svg viewBox="0 0 24 24" class="h-4 w-4 opacity-80">
            <path
              fill="currentColor"
              d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
            />
          </svg>
          <span class="line-clamp-1">{{ clubName || '—' }}</span>
        </div>
        @if (address) {
        <div class="flex items-start gap-2">
          <svg viewBox="0 0 24 24" class="h-4 w-4 opacity-80 mt-0.5">
            <path
              fill="currentColor"
              d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7m0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
            />
          </svg>
          <span>{{ address }}</span>
        </div>
        } @if(nextDate) {
        <div class="flex items-center gap-2">
          <svg viewBox="0 0 24 24" class="h-4 w-4 opacity-80">
            <path
              fill="currentColor"
              d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.89-1.99 2L3 20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6c0-1.11-.9-2-2-2m0 16H5V10h14v10Z"
            />
          </svg>
          <time class="tabular-nums">{{ nextDate | date : 'EEEE d MMMM • HH:mm' }}</time>
        </div>
        }
      </div>

      <div class="mt-4 flex flex-wrap gap-2">
        @if (ticketUrl) {
        <app-button (clicked)="openUrl()" label="Get tickets" />
        }
      </div>

      <!-- Artists -->
      @if (artists) {
      <div class="mt-6">
        <h3 class="text-sm font-semibold text-neutral-200">Line-up / Artists</h3>
        <div class="mt-2 flex flex-wrap gap-2">
          @for (item of artists; track $index) {
          <app-chip [value]="item.name" />
          }
        </div>
      </div>
      }
      <!-- Categories -->
      @if (categories) {
      <div class="mt-6">
        <h3 class="text-sm font-semibold text-neutral-200">Categories</h3>
        <div class="mt-2 flex flex-wrap gap-2">
          @for (item of categories; track $index) {
          <app-chip [value]="item.title" />
          }
        </div>
      </div>
      }
    </aside>
  `,
})
export class EventInfoComponent implements OnInit {
  private readonly eventService = inject(EventService);

  @Input({ required: true }) eventId!: string;

  @Input({ required: true }) title?: string;
  @Input({ required: true }) clubName?: string;
  @Input({ required: true }) address?: string;
  @Input({ required: true }) nextDate?: Date;
  @Input({ required: true }) ticketUrl?: string;
  artists: { artist_id: number; name: string; profile_url: string | null }[] = [];
  categories: { category_id: number; title: string }[] = [];

  ngOnInit(): void {
    this.eventService.getArtistsByEventId(this.eventId).subscribe({
      next: (res) => {
        console.log(res);

        if (res.success) {
          this.artists = res.data;
        }
      },
      error: (err) => {
        console.error('Error fetching artists:', err);
      },
    });

    this.eventService.getCategoriesByEventId(this.eventId).subscribe({
      next: (res) => {
        if (res.success) {
          this.categories = res.data;
        }
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      },
    });
  }

  openUrl() {
    if (this.ticketUrl) {
      window.open(this.ticketUrl, '_blank', 'noopener');
    }
  }
}
