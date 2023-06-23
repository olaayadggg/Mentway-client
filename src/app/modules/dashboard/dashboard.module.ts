import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RequestsComponent } from './components/requests/requests.component';
import { UpcomingSessionsComponent } from './components/upcoming-sessions/upcoming-sessions.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "dashboard",
    canActivate: [],
    children: [
      { path: "upcomingsessions", component: UpcomingSessionsComponent },
      { path: "requests", component: RequestsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    SideMenuComponent,
    RequestsComponent,
    UpcomingSessionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ]
})
export class DashboardModule { }
