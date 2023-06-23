import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ProfileMentorComponent } from "./components/profile-mentor/profile-mentor.component";
import { EditProfileMentorComponent } from "./components/edit-profile-mentor/edit-profile-mentor.component";
import { AddServiceComponent } from './components/add-service/add-service.component';
import { IndexComponent } from "../dashboard/components/index/index.component";
import { PaymentMethodComponent } from "src/app/shared/payment-method/payment-method.component";
import { RateComponent } from "src/app/shared/rate/rate/rate.component";
import { ViewServiceComponent } from "src/app/shared/view-service/view-service.component";
const routes: Routes = [
  {
    path: "mentor",
    canActivate: [],
    children: [
      { path: "dashboard", component: IndexComponent },
      { path: "profile-mentor", component: ProfileMentorComponent },
      { path: "edit-profile", component: EditProfileMentorComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ProfileMentorComponent,
    // EditProfileMentorComponent,
    AddServiceComponent,
    // IndexComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
})
export class mentorModule {}
