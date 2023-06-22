import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EditProfileComponent } from "./components/edit-profile-mentee/edit-profile.component";
import { ProfileMenteeComponent } from "./components/profile-mentee/profile-mentee.component";
import { SearchMentorsComponent } from "./components/search-mentors/search-mentors.component";
import { RequestSessionComponent } from './components/request-session/request-session.component';
import { MatDatepickerModule,MatDatepickerInputEvent} from '@angular/material/datepicker';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule} from '@angular/material/core';
import { MatIconModule} from '@angular/material/icon';
import { IndexComponent } from "../dashboard/components/index/index.component";
import { PaymentMethodComponent } from "src/app/shared/payment-method/payment-method.component";
import { RateComponent } from "src/app/shared/rate/rate/rate.component";
import { ViewServiceComponent } from "src/app/shared/view-service/view-service.component";
import { UpcomingSessionsComponent } from "../dashboard/components/upcoming-sessions/upcoming-sessions.component";
const routes: Routes = [
  {
    path: "mentee",
    canActivate: [],
    children: [
      { path: "dashboard", component: IndexComponent },
      { path: "dashboard/upcomingsessions", component: UpcomingSessionsComponent },
      { path: "profile-mentee", component: ProfileMenteeComponent },
      { path: "edit-profile", component: EditProfileComponent },
      { path: "search", component: SearchMentorsComponent},
      { path: "date-pick", component: RequestSessionComponent},
      { path: "payment", component: PaymentMethodComponent}
    ],
  },
];

@NgModule({
  declarations: [
    ProfileMenteeComponent,
    EditProfileComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
  ],
})
export class menteeModule {}
