import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../core/models/api-response.model';
import { Club } from '../core/models/club.model';
import { ClubSocialNetwork } from '../core/models/club-social-network.model';

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  private readonly httpClient = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);

  private get baseUrl(): string {
    if (isPlatformServer(this.platformId)) {
      return 'http://localhost:8002/api/v1/club';
    }
    return `${environment.apiUrl}/api/v1/club`;
  }

  getClubById(clubId: number) {
    return this.httpClient.get<ApiResponse<Club>>(`${this.baseUrl}/${clubId}/detail`);
  }

  getAllSocials(clubId: number) {
    return this.httpClient.get<ApiResponse<ClubSocialNetwork[]>>(`${this.baseUrl}/${clubId}/social`);
  }

  getAllLocationsByClubId(clubId: number) {
    return this.httpClient.get<ApiResponse<any[]>>(`${this.baseUrl}/${clubId}/location`);
  }
}
