import { Component, inject, Input, OnChanges } from '@angular/core';
import { ClubService } from '../../../services/club.service';
import { SocialNetworkPipe } from '../../../pipes/social-network-pipe';
import { CommonModule } from '@angular/common';
import { Club } from '../../../core/models/club.model';
import { ClubSocialNetwork } from '../../../core/models/club-social-network.model';

@Component({
  standalone: true,
  selector: 'event-club',
  imports: [CommonModule, SocialNetworkPipe],
  template: `
    <div class="rounded-2xl bg-neutral-900/60 border border-white/10 p-5">
      <h3 class="text-sm font-semibold text-neutral-200">Organiza</h3>
      <div class="mt-3 flex items-center gap-3">
        <div
          class="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center"
        >
          @if (club?.logo_url) {
          <img [src]="club?.logo_url" alt="" class="h-full w-full rounded-xl object-cover" />
          } @else {
          <span class="text-sm font-semibold text-white">{{ getClubInitials() }}</span>
          }
        </div>
        <div>
          <p class="text-sm font-medium">{{ club?.name || '—' }}</p>
          <p class="text-xs text-neutral-400">{{ 'Oslo' }}</p>
        </div>
      </div>
      @if (socials) {
      <div class="mt-4 flex gap-2">
        @for (item of socials; track $index) {
        <a
          [href]="item.url"
          target="_blank"
          rel="noopener"
          class="rounded-lg bg-white/5 px-3 py-1.5 text-xs border border-white/10 hover:bg-white/10"
        >
          {{ item.social_network_id | socialNetworkPipe }}
        </a>
        }
      </div>
      }
    </div>
  `,
})
export class EventClubComponent implements OnChanges {
  private readonly clubService = inject(ClubService);

  @Input({ required: true }) club?: Club;

  socials: ClubSocialNetwork[] = [];

  ngOnChanges(): void {
    if (!this.club) return;
    const clubNumber = this.club?.id ?? 0;
    this.clubService.getAllSocials(clubNumber).subscribe({
      next: (res) => {
        if (res.success) {
          this.socials = res.data ?? [];
        } else {
          console.error('Failed to load club socials', res.message);
        }
      },
      error: (err) => {
        console.error('Failed to load club socials', err);
      },
    });
  }

  getClubInitials(): string {
    if (!this.club?.name) return '?';

    const words = this.club.name.trim().split(' ');
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }

    return words
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join('');
  }
}
