import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EditProfileComponent } from "./components/edit-profile-mentee/edit-profile.component";
import { ProfileMenteeComponent } from "./components/profile-mentee/profile-mentee.component";
import { SearchMentorsComponent } from "./components/search-mentors/search-mentors.component";
import { RequestSessionComponent } from './components/request-session/request-session.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule} from '@angular/material/core';
import { MatIconModule} from '@angular/material/icon';
import { IndexComponent } from "src/app/shared/index/index.component";
import { AuthGuard } from "src/app/guards/auth.guard";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ViewMentorComponent } from "./components/view-mentor/view-mentor.component";
import { BrowserModule } from "@angular/platform-browser";

const routes: Routes = [
  {
    path: "mentee",
    canActivate: [AuthGuard],
    children: [
      { path: "dashboard", component: IndexComponent },
      { path: "profile-mentee", component: ProfileMenteeComponent },
      { path: "edit-profile", component: EditProfileComponent },
      { path: "search", component: SearchMentorsComponent},
      { path: "date-pick", component: RequestSessionComponent},
      { path: "view-mentor/:id", component: ViewMentorComponent}
    ],
  },
];

@NgModule({
  declarations: [
    ProfileMenteeComponent,
    // SearchMentorsComponent,
    // ViewMentorComponent
    // PaginationComponent
    // EditProfileComponent,

  ],
  imports: [
    CommonModule,
    // BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    BrowserModule,
  ],
})
export class menteeModule {}
