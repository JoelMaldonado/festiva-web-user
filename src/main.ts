import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import mapboxgl from 'mapbox-gl';
import { environment } from './environments/environment';

mapboxgl.accessToken = environment.mapboxToken;

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
