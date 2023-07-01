import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/modules/auth-module/auth-service/auth.service';
import { environment } from 'src/environments/environment';
import { SessionService } from 'src/app/modules/session-module/service/session.service';
@Component({
  selector: 'app-confirm-request',
  templateUrl: './confirm-request.component.html',
  styleUrls: ['./confirm-request.component.css']
})
export class ConfirmRequestComponent {
  id: number = 0;
  MyData: any | null = null;
  backend_url='';

  constructor(
    private active: ActivatedRoute,
    private authService:AuthService,
    private sessionService:SessionService

  ) {
    this.id = this.authService.getloggedUserId();
    this.backend_url=environment.API_URL
  }
  rows: any[] = []
  totalItems = 0;
  itemsPerPage = 0;
  currentPage = 1;

  getMenteeSessions(page = 0) {
    return this.sessionService.getMenteeSessions(page, 1, this.id).subscribe({
      next: (res: any) => {
        console.log(res)
        this.totalItems = res?.totalElements
        this.itemsPerPage = res?.size
        this.currentPage = res?.number
        this.rows = res?.content
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.getMenteeSessions(0)
    ;
  }
}
