import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
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
import { ApiResponse } from '../../core/models/api-response.model';
import { SeoService } from '../../services/seo.service';

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
  private readonly clubService = inject(ClubService);
  private readonly seoService = inject(SeoService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly platformId = inject(PLATFORM_ID);

  eventId?: string;
  event?: Event;
  firstLocation?: any;
  nextDate?: Date;
  club?: Club;

  ngOnInit(): void {
    const res = this.route.snapshot.data['eventData'] as ApiResponse<Event>;
    this.event = res.success ? res.data : undefined;
    if (!this.event) return;

    this.eventId = String(this.event.id);

    const slug = slugify(this.event.title);
    const canonicalUrl = `https://app.festiva.no/events/${this.event.id}/${slug}`;
    const desc = (this.event.description || '').replace(/\s+/g, ' ').trim().slice(0, 160);

    this.seoService.set({
      title: this.event.title,
      description: desc || undefined,
      canonicalUrl,
      image: this.event.image_url,
      type: 'article',
    });

    if (isPlatformBrowser(this.platformId)) {
      const currentSlug = this.route.snapshot.paramMap.get('slug');
      if (currentSlug !== slug) {
        this.router.navigate(['/events', this.event.id, slug], {
          replaceUrl: true,
        });
      }
    }

    this.loadClub(this.event.club_id);
  }

  private loadClub(clubId: number): void {
    this.clubService.getClubById(clubId).subscribe({
      next: (res) => {
        if (res.success) {
          this.club = res.data;
          this.loadAddress();
        }
      },
      error: (err) => console.error('Failed to load club', err),
    });
  }

  private loadAddress(): void {
    this.clubService.getAllLocationsByClubId(this.club!.id).subscribe({
      next: (res) => {
        if (res.success) {
          this.firstLocation = res.data[0] ?? undefined;
        }
      },
      error: (err) => console.error('Error fetching locations', err),
    });
  }

  onNextDateChange(date?: Date): void {
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