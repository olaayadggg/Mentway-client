import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { AgoraService } from 'src/app/services/agora.service';
import { SessionService  } from '../../service/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import AgoraRTC, { IAgoraRTCClient, IAgoraRTCRemoteUser } from 'agora-rtc-sdk-ng';
@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit,AfterViewInit {


  // main div that will contain local remote video
  mainDiv = document.getElementById('main');

  // local audio and video
  localAudioTrack: any
  localVideoTrack: any

  // agora rtc client
  client: any

  // channel and user id  form url prams
  channel: any;
  userId: any;

  // timer and call duration 
  time: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  // call interval
  timerInterval: any;

  // opstion or User to Join the chennal
  options = {
    appId: 'ce80243b89ba48bcb526162020452b3d',
    channel: 'test',
    token: null,
    uid: 0,
  };

  videoIcon: boolean = true;
  // videocam
  // videocam_off
  micIcon: boolean = true;
  // mic
  // mic_off
  constructor(
    private agoraService: SessionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.mainDiv = document.getElementById('main')
    this.options.channel = this.activatedRoute.snapshot.paramMap.get('channel')!;
    this.options.uid = Number(this.activatedRoute.snapshot.paramMap.get('id'))!;
  }

  async ngOnInit(): Promise<any> {
    this.mainDiv = document.getElementById('main')

    // create agora client
    this.client = this.agoraService.createClient()

    // on user-published event
    this.client.on('user-published', async (user: any, mediaType: any) => {
      // Subscribe to the remote user when the SDK triggers the "user-published" event
      await this.client.subscribe(user, mediaType);


      if (mediaType === 'video') {

        // Get the RemoteVideoTrack object in the AgoraRTCRemoteUser object.
        const remoteVideoTrack = user.videoTrack;

        // Dynamically create a container in the form of a DIV element for playing the remote video track.
        const remotePlayerContainer = document.createElement('div');

        // set style

        remotePlayerContainer.classList.add('remote', 'm-2', 'w-50', 'position-relative', 'rounded')

        const remotePlayerContainerName = document.createElement('p')
        remotePlayerContainerName.classList.add('position-absolute', 'top-0', 'end-0', 'px-2', 'lead')
        remotePlayerContainerName.textContent = `remote ${user.uid}`;
        remotePlayerContainer.append(remotePlayerContainerName);

        //  change style of local video
        const localContainer = document.getElementById(String(this.options.uid))!;
        localContainer.classList.remove('w-100');
        localContainer.classList.add('w-50');

        remotePlayerContainer.id = user.uid.toString();

        if (this.mainDiv != null) {
          this.mainDiv.append(remotePlayerContainer);
        }
        remoteVideoTrack.play(remotePlayerContainer);

        /**
         * remove div adn video style from agora
         */

        // const videoParent = document.getElementById(`agora-video-player-${remoteVideoTrack._ID}`) as HTMLDivElement;
        const videoParent = remotePlayerContainer.children[1] as HTMLDivElement;

        // const video = document.querySelector(`#video_${remoteVideoTrack._ID}`)! as HTMLVideoElement;
        const video = videoParent.children[0] as HTMLVideoElement;

        videoParent.removeAttribute('style')
        videoParent.classList.add('w-100', 'h-100', 'rounded-3')

        video.removeAttribute('style');

        video.style.objectFit = 'cover';
        video.classList.add('border', 'border-2', 'border-secondary', 'rounded-3', 'w-100', 'h-100', 'object-fit-cover')
      }

      // If the remote user publishes an audio track.
      if (mediaType === 'audio') {
        // Get the RemoteAudioTrack object in the AgoraRTCRemoteUser object.
        const remoteAudioTrack = user.audioTrack;
        // Play the remote audio track. No need to pass any DOM element.
        remoteAudioTrack.play();
      }

      // Listen for the "user-unpublished" event
      this.client.on('user-unpublished', (user: any) => {

        const remotePlayerContainer = document.getElementById(user.uid)!;
        const localContainer = document.getElementsByClassName('local')[0];
        localContainer.classList.remove('w-50');
        localContainer.classList.add('w-100');
        remotePlayerContainer.remove();
      });
    });

  }

  async ngAfterViewInit() {

    this.mainDiv = document.getElementById('main');
    // start call timer
    this.startTimer();

    // join the call
    await this.join();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.time++;

      this.hours = Math.floor(this.time / 3600);
      this.minutes = Math.floor((this.time % 3600) / 60);
      this.seconds = this.time % 60;
      if (this.minutes >= 5) {
        this.leave();
        // clear interval in leave fun
        // clearInterval(this.timerInterval);
        // console.log(this.client.connectionState)
        this.router.navigate(['/']);

      }
    }, 1000);
  }

  async toggleAudio() {
    try {
      this.micIcon = !this.micIcon;
      return await this.localAudioTrack.setEnabled(!this.localAudioTrack._enabled);
    } catch (error) {
      console.log(error)
    }

  }

  async toggleCamera() {
    try {
      this.videoIcon = !this.videoIcon;
      console.log(this.localVideoTrack)
      this.localVideoTrack._config.mirroe = true
      return await this.localVideoTrack.setEnabled(!this.localVideoTrack._enabled);
    } catch (error) {
      console.log(error)
    }
  }
  // maxmizeScreen(){
  //   const localContainer = document.getElementsByClassName('local')[0];
  //   localContainer.classList.remove('w-100','w-50');
  //   this.mainDiv?.classList.add('postion-relative')
  //   localContainer.classList.add('w-25','h-25', 'postion-absloute', 'bottom-0', 'end-0', 'px-2');
  // }
  async leave() {

    clearInterval(this.timerInterval);
    this.localAudioTrack.close();
    this.localVideoTrack.close();
    const localPlayer = document.getElementById(String(this.options.uid));
    localPlayer && localPlayer.remove();

    this.client.remoteUsers.forEach((user: any) => {
      // Destroy the dynamically created DIV container.
      const playerContainer = document.getElementById(String(user.uid))!;
      playerContainer && playerContainer.remove();

    });
    await this.client.leave();
    this.router.navigate(['/']);

  }



  async join() {
    if (this.client) {
      await this.client.join(
        this.options.appId,
        this.options.channel,
        this.options.token,
        this.options.uid,

      );
    }

    this.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();

    this.localVideoTrack = await AgoraRTC.createCameraVideoTrack();

    if (this.client.connectionState == 'CONNECTED')
      await this.client.publish([
        this.localAudioTrack,
        this.localVideoTrack,
      ]);

    const localPlayerContainer = document.createElement('div');
    localPlayerContainer.id = this.options.uid.toString();
    const localPlayerContainerName = document.createElement('p');
    localPlayerContainerName.classList.add('position-absolute', 'top-0', 'end-0', 'px-2', 'lead')
    localPlayerContainerName.textContent = `local ${this.options.uid}`;
    localPlayerContainer.append(localPlayerContainerName);
    localPlayerContainer.classList.add('local', 'm-2', 'w-100', 'position-relative', 'rounded-5')

    if (this.mainDiv != null) {
      this.mainDiv.append(localPlayerContainer);
    }



    this.localVideoTrack.play(localPlayerContainer, { mirror: false });
    // 
    const videoParent = document.querySelector(`#agora-video-player-${this.localVideoTrack._ID}`)! as HTMLDivElement;
    const video = document.querySelector(`#video_${this.localVideoTrack._ID}`)! as HTMLVideoElement;
    // 
    videoParent.removeAttribute('style')
    videoParent.classList.add('w-100', 'h-100', 'rounded-3')

    video.removeAttribute('style');
    //  
    videoParent.style.height = '100%';
    videoParent.style.width = '100%';
    // video.style.height = "100%";
    // video.style.width = "100%";
    video.style.objectFit = 'cover';
    video.classList.add('border', 'border-2', 'border-secondary', 'rounded-3', 'w-100', 'h-100', 'object-fit-cover')

  }
}
