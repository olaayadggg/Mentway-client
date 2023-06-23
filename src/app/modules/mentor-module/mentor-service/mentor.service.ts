import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  private baseUrl: string = `${environment.API_URL}/api/v1`;

  constructor(private http: HttpClient) { }

  getAllMentors(page = 0, size = 5, name?: string, rate?: number, categoryId?: number) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    params = rate ? params.append('rate', rate.toString()) : params;
    params = name ? params.append('name', name) : params;
    params = categoryId ? params.append('categoryId', categoryId.toString()) : params;

    return this.http.get(`${this.baseUrl}/mentors`, { params: params })
  }

  getMentorById(id: number) {
    return this.http.get(`${this.baseUrl}/mentors/${id}`)
  }

  deleteMentorById(id: number) {
    return this.http.delete(`${this.baseUrl}/mentors/${id}`)
  }

  createMentor(mentor: any) {
    return this.http.post(`${this.baseUrl}/mentors`, mentor)
  }

  updateMentor(updatedMentor: any) {
    return this.http.put(`${this.baseUrl}/mentors`, updatedMentor)
  }
}
