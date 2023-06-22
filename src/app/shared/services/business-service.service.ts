import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BusinessServiceService {
  private baseUrl: string = `${environment.API_URL}/api/v1`;

  constructor(private http:HttpClient) { }

  getAllServicesOrSearch(page = 0, size = 5, name?: string, categoryId?: number) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    // params = name ? params.append('name', name) : params;
    // params = categoryId ? params.append('categoryId', categoryId.toString()) : params;

    return this.http.get(`${this.baseUrl}/services`, { params: params })
  }
  createService(service:any){
    
    return this.http.post(`${this.baseUrl}/services`, service)
  }

  applyForService(serviceId:number,request: any) {
    return this.http.post(`${this.baseUrl}/services/apply/${serviceId}`, request)
  }

  getServiceByMentorId(mentorId: number, page = 0, size = 5) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get(`${this.baseUrl}/services/mentor/${mentorId}`,{params})
  }
}
