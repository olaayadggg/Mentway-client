import { Injectable } from '@angular/core';
import AgoraRTC, { IAgoraRTCClient, IAgoraRTCRemoteUser } from 'agora-rtc-sdk-ng';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
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
