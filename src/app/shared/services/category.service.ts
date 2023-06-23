import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl: string = `${environment.API_URL}/api/v1`;

  constructor(private http:HttpClient) { }

  getAllCategories(){
    return this.http.get(`${this.baseUrl}/categories`)
  }
}
