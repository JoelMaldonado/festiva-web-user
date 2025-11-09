import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventAboutComponent } from './components/about.component';
import { EventScheduleComponent } from './components/schedule.component';
import { EventMapComponent } from './components/map.component';
import { EventInfoComponent } from './components/info.component';
import { EventClubComponent } from './components/club.component';
import { OtherEventsComponent } from './components/other-events.component';
import { EventBannerComponent } from './components/banner.component';
import { EventGradientsComponent } from './components/gradients.component';
import { EventService } from '../../services/event.service';
import { Event } from '../../core/models/event.model';
import { ClubService } from '../../services/club.service';
import { Club } from '../../core/models/club.model';

@Component({
  selector: 'app-event-detail',
  imports: [
    CommonModule,
    RouterModule,
    EventAboutComponent,
    EventScheduleComponent,
    EventMapComponent,
    EventInfoComponent,
    EventClubComponent,
    OtherEventsComponent,
    EventBannerComponent,
    EventGradientsComponent,
  ],
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent implements OnInit {
  private readonly eventService = inject(EventService);
  private readonly clubService = inject(ClubService);

  @Input({ required: true }) eventId!: string;

  event?: Event;

  address?: string = '123 Event St, Cityville';

  nextDate?: Date;

  club?: Club;

  ngOnInit(): void {
    this.eventService.getEventById(this.eventId).subscribe({
      next: (res) => {
        if (res.success) {
          this.event = res.data;
          this.getClub(this.event!.club_id);
        } else {
          console.error('Failed to load event', res.message);
        }
      },
      error: (err) => {
        console.error('Error fetching event', err);
      },
    });
  }

  getClub(clubId: number) {
    this.clubService.getClubById(clubId).subscribe({
      next: (res) => {
        if (res.success) {
          this.club = res.data;
        } else {
          console.error('Failed to load club data', res.message);
        }
      },
      error: (err) => {
        console.error('Failed to load club data', err);
      },
    });
  }

  onNextDateChange(date?: Date) {
    this.nextDate = date;
  }
}
