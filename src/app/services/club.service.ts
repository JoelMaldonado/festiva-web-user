import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../core/models/api-response.model';
import { Club } from '../core/models/club.model';
import { ClubSocialNetwork } from '../core/models/club-social-network.model';

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  private readonly baseUrl = `${environment.apiUrl}/api/v1/club`;
  private readonly httpClient = inject(HttpClient);

  getClubById(clubId: number) {
    return this.httpClient.get<ApiResponse<Club>>(`${this.baseUrl}/${clubId}`);
  }

  getAllSocials(clubId: number) {
    return this.httpClient.get<ApiResponse<ClubSocialNetwork[]>>(`${this.baseUrl}/${clubId}/social`);
  }

  getAllLocationsByClubId(clubId: number) {
    return this.httpClient.get<ApiResponse<any[]>>(`${this.baseUrl}/${clubId}/location`);
  }
}
