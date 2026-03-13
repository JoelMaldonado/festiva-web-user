import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  standalone: true,
  selector: 'map-test',
  template: `<div #mapDiv class="h-72 w-[400px] sm:w-[800px] xl:w-[1200px]"></div>`,
})
export class MapTestComponent implements AfterViewInit {
  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  @Input({ required: true }) lat!: number;
  @Input({ required: true }) lng!: number;
  @Input({ required: true }) zoom!: number;

  ngAfterViewInit() {
    const map = new mapboxgl.Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [this.lng, this.lat],
      zoom: this.zoom,
    });

    new mapboxgl.Marker({ color: '#ff4785' }).setLngLat([this.lng, this.lat]).addTo(map);

  }
}
