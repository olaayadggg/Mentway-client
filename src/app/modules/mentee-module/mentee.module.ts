import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { EditProfileComponent } from "./components/edit-profile/edit-profile.component";
import { ProfileMenteeComponent } from "./components/profile-mentee/profile-mentee.component";
import { MyBalanceComponent } from "./components/my-balance/my-balance.component";
import { SearchMentorsComponent } from "./components/search-mentors/search-mentors.component";
import { RequestSessionComponent } from './components/request-session/request-session.component';
import { UpcomingSessionsComponent } from "./components/upcoming-sessions/upcoming-sessions.component";
import { ChatComponent } from "./components/chat/chat.component";
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import { MatDatePickerModule } from '@angular/material/datePicker';
import {MatNativeDateModel} from '@angular/material/core';
import {MatDatepickerModule,MatDatepickerInputEvent} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import{MatIconModule} from '@angular/material/icon';


const routes: Routes = [
  {
    path: "mentee",
    canActivate: [],
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "profile-mentee", component: ProfileMenteeComponent },
      { path: "edit-profile", component: EditProfileComponent },
      { path: "my-balance", component: MyBalanceComponent },
      { path: "search", component: SearchMentorsComponent},
      { path: "date-pick", component: RequestSessionComponent},
      { path: "upcomingsession", component: UpcomingSessionsComponent},
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileMenteeComponent,
    EditProfileComponent,
    MyBalanceComponent,
    RequestSessionComponent,
    UpcomingSessionsComponent,
    ChatComponent,



  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,

  ],
})
export class menteeModule {}
