import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenteeService {
  private baseUrl: string = `${environment.API_URL}/api/v1`;
  private service: any;
  constructor(private http:HttpClient) {}

  getMenteeById(id: string){
    return this.http.get(`${this.baseUrl}/mentees/${id}`);
  }

  deleteMenteeById(id: number) {
    return this.http.delete(`${this.baseUrl}/mentees/${id}`)
  }

  createMentee(mentee: any) {
    return this.http.post(`${this.baseUrl}/mentees`, mentee)
  }

  updateMentee(updatedMentee: any) {
    return this.http.put(`${this.baseUrl}/mentees`, updatedMentee)
  }




}
