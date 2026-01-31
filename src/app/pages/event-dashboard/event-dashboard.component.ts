import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-event-dashboard-page',
  imports: [CommonModule],
  templateUrl: './event-dashboard.component.html',
})
export class EventDashboardPage implements OnInit {
  private readonly eventService = inject(EventService);
  private readonly router = inject(Router);

  date = new Date().getFullYear();

  events: any[] = [];

  ngOnInit(): void {
    this.eventService.getAll().subscribe({
      next: (res) => {
        if (res.success) {
          this.events = res.data;
        } else {
          console.log(res.message);
        }
      },
      error: (err) => {
        console.error('Error fetching events:', err);
      },
    });
  }

  toDetail(eventId: string) {
    this.router.navigate(['events', eventId]);
  }
}
