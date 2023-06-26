import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenteeService } from '../../mentee-service/mentee.service';
import { AuthService } from '../../../auth-module/auth-service/auth.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-profile-mentee',
  templateUrl: './profile-mentee.component.html',
  styleUrls: ['./profile-mentee.component.css']
})
export class ProfileMenteeComponent implements OnInit {
  id: number = 0;
  MyData: any | null = null;
  backend_url='';

  constructor(
    private active: ActivatedRoute,
    private menteeService: MenteeService,
    private authService:AuthService,
  ) {
    // this.id = Number(this.active.snapshot.paramMap.get('id'));
    this.id = this.authService.getloggedUserId();
    this.backend_url=environment.API_URL
  }

  ngOnInit(): void {
    this.menteeService.getMenteeById(this.id).subscribe({
      next: (response) => {
        console.log(response);
        this.MyData = response
      },
    });
  }

}
