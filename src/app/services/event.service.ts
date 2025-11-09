import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../core/models/api-response.model';
import { Event } from '../core/models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private readonly baseUrl = `${environment.apiUrl}/api/v1/event`;
  private readonly httpClient = inject(HttpClient);

  getEventById(eventId: string) {
    return this.httpClient.get<ApiResponse<Event>>(`${this.baseUrl}/${eventId}`);
  }

  getArtistsByEventId(eventId: string) {
    return this.httpClient.get<ApiResponse<any>>(`${this.baseUrl}/${eventId}/artists`);
  }

  getCategoriesByEventId(eventId: string) {
    return this.httpClient.get<ApiResponse<any>>(`${this.baseUrl}/${eventId}/categories`);
  }

  getEventSchedules(eventId: string) {
    return this.httpClient.get<ApiResponse<any>>(`${this.baseUrl}/${eventId}/schedules`);
  }
}
