import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RequestsComponent } from './components/requests/requests.component';
import { Routes,RouterModule } from '@angular/router';
import { UpcomingSessionsComponent } from './components/upcoming-sessions/upcoming-sessions.component';
import { IndexComponent } from './components/index/index.component';

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
    // RequestsComponent,
    // IndexComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ]
})
export class DashboardModule { }
