import { Component, Input } from '@angular/core';
import { MapboxMapComponent } from '../../../shared/components/mapbox-map.component';
import { MapTestComponent } from '../../../shared/components/map-test';

@Component({
  standalone: true,
  selector: 'event-map',
  template: `
    <article class="rounded-2xl bg-neutral-900/60 border border-white/10 p-0 overflow-hidden">
      <div class="p-5">
        <h2 class="text-lg font-semibold tracking-tight">Ubicación</h2>
        @if (address) {
        <p class="mt-1 text-sm text-neutral-300">{{ address }}</p>
        }
      </div>
      <div
        class="h-72 w-full bg-neutral-900 border-t border-white/10 flex items-center justify-center"
      >
        <map-test [lat]="latitude" [lng]="longitude" [zoom]="zoom" />
      </div>
    </article>
  `,
  imports: [MapTestComponent],
})
export class EventMapComponent {
  @Input({ required: true }) address!: string;
  @Input({ required: true }) latitude!: number;
  @Input({ required: true }) longitude!: number;
  zoom = 12;
}
