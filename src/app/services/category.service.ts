import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../core/models/api-response.model';
import { Category } from '../core/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly httpClient = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);

  private get baseUrl(): string {
    if (isPlatformServer(this.platformId)) {
      return 'http://localhost:8002/api/v1/category';
    }
    return `${environment.apiUrl}/api/v1/category`;
  }

  getAllCategories() {
    return this.httpClient.get<ApiResponse<Category[]>>(`${this.baseUrl}`);
  }
}
