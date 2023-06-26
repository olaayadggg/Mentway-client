import { Injectable } from '@angular/core';
import AgoraRTC, { IAgoraRTCClient } from 'agora-rtc-sdk-ng';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private baseUrl: string = `${environment.API_URL}/api/v1`;

  constructor(private http: HttpClient) { }
  getMenteeSessions(page = 0, size = 5, id:number)
  {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get(`${this.baseUrl}/services/upcoming/mentee/${id}`, { params: params })

  }
  getMentorSessions(page = 0, size = 5, id: number) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    // let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*').set('Origin', 'http://localhost:4200')

    return this.http.get(`${this.baseUrl}/services/upcoming/mentors/${id}`, { params: params })

  }
  createClient(): any {
    return AgoraRTC.createClient({
      mode: 'rtc',
      codec: 'h264',
      websocketRetryConfig: {
        timeout: 10,
        timeoutFactor: 0,
        maxRetryCount: 1,
        maxRetryTimeout: 2000,
      },
    });
  }
}
