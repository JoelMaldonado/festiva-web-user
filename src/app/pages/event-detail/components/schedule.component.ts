import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { EventService } from '../../../services/event.service';

@Component({
  standalone: true,
  selector: 'event-schedule',
  imports: [CommonModule],
  template: `
    <article class="rounded-2xl bg-neutral-900/60 border border-white/10 p-5">
      <h2 class="text-lg font-semibold tracking-tight">Fechas y horarios</h2>
      <ul class="mt-3 divide-y divide-white/5">
        @for (item of schedules; track $index) {
        <li class="py-3 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div
              class="flex flex-col items-center rounded-xl bg-black/70 px-2 py-1 ring-1 ring-white/15"
            >
              <span class="text-[10px] font-bold tracking-wide text-neutral-200">{{
                item.event_date | date : 'MMM' | uppercase
              }}</span>
              <span class="text-lg font-extrabold leading-none text-white">{{
                item.event_date | date : 'd'
              }}</span>
            </div>
            <div>
              <p class="text-sm font-medium">
                <time class="tabular-nums">
                  {{ item.event_date | date : 'EEEE dd MMMM' }}
                </time>
              </p>
              <p class="text-xs text-neutral-400">Time: {{ item.start_time }}</p>
            </div>
          </div>
        </li>
        } @if (!schedules.length) {
        <li class="py-3 text-sm text-neutral-400">Pronto anunciaremos fechas.</li>
        }
      </ul>
    </article>
  `,
})
export class EventScheduleComponent implements OnInit {
  private readonly eventService = inject(EventService);

  @Input({ required: true }) eventId!: string;
  @Output() nextDateChange = new EventEmitter<Date | undefined>();

  schedules: {
    schedule_id: number;
    event_id: number;
    event_date: string | Date;
    start_time?: string | null;
  }[] = [];

  ngOnInit(): void {
    this.eventService.getEventSchedules(this.eventId).subscribe({
      next: (res) => {
        this.schedules = res.data;
        this.nextDateChange.emit(this.nextDate);
      },
      error: (error) => {
        console.error('Error fetching event schedules:', error.message);
      },
    });
  }

  get nextDate(): Date | undefined {
    if (!this.schedules?.length) return undefined;
    const today = new Date();
    const sorted = [...this.schedules]
      .map((s) => ({ ...s, d: new Date(s.event_date) }))
      .sort((a, b) => +a.d - +b.d);
    const upcoming =
      sorted.find((s) => +new Date(s.event_date) >= +new Date(today.toDateString())) || sorted[0];
    return new Date(upcoming.event_date);
  }
}
