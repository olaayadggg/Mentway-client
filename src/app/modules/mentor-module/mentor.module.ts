import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProfileMentorComponent } from "./components/profile-mentor/profile-mentor.component";
import { EditProfileMentorComponent } from "./components/edit-profile-mentor/edit-profile-mentor.component";
import { MyBalanceComponent } from "./components/my-balance/my-balance.component";

const routes: Routes = [
  {
    path: "mentor",
    canActivate: [],
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "profile-mentor", component: ProfileMentorComponent },
      { path: "edit-profile", component: EditProfileMentorComponent },
      { path: "my-balance", component: MyBalanceComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileMentorComponent,
    EditProfileMentorComponent,
    MyBalanceComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class mentorModule {}
