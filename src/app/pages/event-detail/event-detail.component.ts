import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EventAboutComponent } from './components/about.component';
import { EventScheduleComponent } from './components/schedule.component';
import { EventMapComponent } from './components/map.component';
import { EventInfoComponent } from './components/info.component';
import { EventClubComponent } from './components/club.component';
import { EventBannerComponent } from './components/banner.component';
import { EventGradientsComponent } from './components/gradients.component';
import { EventService } from '../../services/event.service';
import { Event } from '../../core/models/event.model';
import { ClubService } from '../../services/club.service';
import { Club } from '../../core/models/club.model';
import { Meta, Title } from '@angular/platform-browser';

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
    EventBannerComponent,
    EventGradientsComponent,
  ],
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent implements OnInit {
  private readonly eventService = inject(EventService);
  private readonly clubService = inject(ClubService);
  private readonly titleSrv = inject(Title);
  private readonly metaSrv = inject(Meta);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  @Input({ required: true }) eventId!: string;

  event?: Event;

  firstLocation?: any;

  nextDate?: Date;

  club?: Club;

  ngOnInit(): void {
    this.eventService.getEventById(this.eventId).subscribe({
      next: (res) => {
        if (res.success) {
          this.event = res.data;

          // Title
          this.titleSrv.setTitle(`${this.event.title} | Festiva`);

          // Meta Description
          const desc = (this.event.description || '').replace(/\s+/g, ' ').trim().slice(0, 160);

          if (desc) {
            this.metaSrv.updateTag({ name: 'description', content: desc });
          }

          const currentSlug = this.route.snapshot.paramMap.get('slug');
          const expectedSlug = slugify(this.event.title);

          if (currentSlug !== expectedSlug) {
            this.router.navigate(['/events', this.event.id, expectedSlug], {
              replaceUrl: true,
            });
          }

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
          this.getAddress();
        } else {
          console.error('Failed to load club data', res.message);
        }
      },
      error: (err) => {
        console.error('Failed to load club data', err);
      },
    });
  }

  getAddress() {
    this.clubService.getAllLocationsByClubId(this.club!.id).subscribe({
      next: (res) => {
        if (res.success) {
          this.firstLocation = res.data[0] || undefined;
        }
      },
      error: (err) => {
        console.error('Error fetching club locations', err);
      },
    });
  }

  onNextDateChange(date?: Date) {
    this.nextDate = date;
  }
}

function slugify(input: string) {
  return (input || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // quita acentos
    .replace(/[^a-z0-9]+/g, '-') // símbolos/espacios -> "-"
    .replace(/(^-|-$)+/g, '') // trim "-"
    .slice(0, 90);
}
