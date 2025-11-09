import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import mapboxgl, { Map, Marker } from 'mapbox-gl';
import { environment } from '../../../environments/environment';

@Component({
  standalone: true,
  selector: 'app-mapbox-map',
  template: `<div #mapEl class="w-full h-full"></div>`,
  styles: [':host{display:block; min-height:300px;}'],
})
export class MapboxMapComponent implements OnChanges {
  @ViewChild('mapEl', { static: true }) mapEl!: ElementRef<HTMLDivElement>;

  // Entradas: lat/lng y zoom con defaults
  @Input({ required: true }) lat!: number;
  @Input({ required: true }) lng!: number;
  @Input() zoom = 13;

  private map?: Map;
  private marker?: Marker;

  ngOnChanges(changes: SimpleChanges) {
    // Inicializa una sola vez cuando ya hay lat/lng
    if (!this.map && this.lat != null && this.lng != null) {
      mapboxgl.accessToken = environment.mapboxToken; // token
      this.map = new mapboxgl.Map({
        container: this.mapEl.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [this.lng, this.lat], // [lng, lat]
        zoom: this.zoom,
      }); // Crear el mapa (API oficial Map). :contentReference[oaicite:2]{index=2}

      this.map.addControl(new mapboxgl.NavigationControl(), 'top-right'); // opcional

      // Crea marker
      this.marker = new mapboxgl.Marker().setLngLat([this.lng, this.lat]).addTo(this.map); // Marker oficial. :contentReference[oaicite:3]{index=3}
    }

    // Si cambian coords/zoom luego, mueve la cámara y el marker
    if (this.map && this.marker && (changes['lat'] || changes['lng'])) {
      this.map.flyTo({ center: [this.lng, this.lat], zoom: this.zoom });
      this.marker.setLngLat([this.lng, this.lat]);
    }
    if (this.map && changes['zoom']) {
      this.map.setZoom(this.zoom);
    }
  }
}
