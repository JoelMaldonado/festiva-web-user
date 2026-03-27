import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';
import { catchError, of, timeout } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-event-dashboard-page',
  imports: [CommonModule],
  templateUrl: './event-dashboard.component.html',
})
export class EventDashboardPage implements OnInit {
  private readonly eventService = inject(EventService);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  date = new Date().getFullYear();

  events: any[] = [];

  ngOnInit(): void {
    this.eventService.getAll().pipe(
      timeout(8000),
      catchError((err) => {
        if (!isPlatformBrowser(this.platformId)) {
          console.error('[SSR] Error fetching events:', err.message ?? err);
        } else {
          console.error('Error fetching events:', err);
        }
        return of({ success: false, data: [], message: err.message });
      }),
    ).subscribe((res: any) => {
      if (res.success) {
        this.events = res.data;
      }
    });
  }

  toDetail(eventId: string) {
    this.router.navigate(['events', eventId]);
  }
}
