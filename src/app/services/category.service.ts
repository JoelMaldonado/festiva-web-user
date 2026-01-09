import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../core/models/api-response.model';
import { Category } from '../core/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly baseUrl = `${environment.apiUrl}/api/v1/category`;
  private readonly httpClient = inject(HttpClient);

  getAllCategories() {
    return this.httpClient.get<ApiResponse<Category[]>>(`${this.baseUrl}`);
  }
}
