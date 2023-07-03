import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ApplicationsComponent } from "./components/applications/applications.component";
import { MenteesComponent } from "./components/mentees/mentees.component";
import { MentorsComponent } from "./components/mentors/mentors.component";
import { ReportsComponent } from "./components/reports/reports.component";
import { ReviewsComponent } from './components/reviews/reviews.component';
import { MatIconModule } from "@angular/material/icon";


const routes: Routes = [
  {
    path: "admin",
    canActivate: [],
    children: [
      { path: "applications", component: ApplicationsComponent },
      { path: "mentees", component: MenteesComponent },
      { path: "mentors", component: MentorsComponent },
      { path: "reports", component: ReportsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ApplicationsComponent,
    MenteesComponent,
    MentorsComponent,
    ReportsComponent,
    ReviewsComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forRoot(routes),
  ],
})
export class adminModule {}
