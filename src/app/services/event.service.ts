import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../core/models/api-response.model';
import { Event } from '../core/models/event.model';
import { Observable } from 'rxjs';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);

  private get baseUrl(): string {
    if (isPlatformServer(this.platformId)) {
      return 'http://localhost:8002/api/v1/event';
    }
    return `${environment.apiUrl}/api/v1/event`;
  }

  getAll() {
    return this.http.get<ApiResponse<Event[]>>(`${this.baseUrl}/`);
  }

  getEventById(eventId: string): Observable<ApiResponse<Event>> {
    return this.http.get<ApiResponse<Event>>(`${this.baseUrl}/${eventId}`);
  }

  getArtistsByEventId(eventId: string) {
    return this.http.get<ApiResponse<any>>(`${this.baseUrl}/${eventId}/artists`);
  }

  getCategoriesByEventId(eventId: string) {
    return this.http.get<ApiResponse<any>>(`${this.baseUrl}/${eventId}/categories`);
  }

  getEventSchedules(eventId: string) {
    return this.http.get<ApiResponse<any>>(`${this.baseUrl}/${eventId}/schedules`);
  }
}
