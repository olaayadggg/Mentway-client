import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ProfileMentorComponent } from "./components/profile-mentor/profile-mentor.component";
import { EditProfileMentorComponent } from "./components/edit-profile-mentor/edit-profile-mentor.component";
import { AddServiceComponent } from './components/add-service/add-service.component';
import { PaymentMethodComponent } from "src/app/shared/payment-method/payment-method.component";
import { RateComponent } from "src/app/shared/rate/rate/rate.component";
import { ViewServiceComponent } from "src/app/shared/view-service/view-service.component";
import { MatIconModule} from '@angular/material/icon';
import { IndexComponent } from "src/app/shared/index/index.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "src/app/guards/auth.guard";
const routes: Routes = [
  {
    path: "mentor",
    canActivate: [AuthGuard],
    children: [
      { path: "dashboard", component: IndexComponent },
      { path: "profile-mentor", component: ProfileMentorComponent },
      { path: "edit-profile", component: EditProfileMentorComponent },
      { path: "add-service", component:AddServiceComponent},
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
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    MatIconModule,
  ],
})
export class mentorModule {}
