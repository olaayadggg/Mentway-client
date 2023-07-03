import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SessionComponent } from "./components/session/session.component";
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card';
import { AuthGuard } from "src/app/guards/auth.guard";

const routes: Routes = [
  {
    path: "session",
    canActivate: [AuthGuard],
    children: [
      { path: ":channel", component: SessionComponent },

    ],
  },
];

@NgModule({
  declarations: [
    SessionComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forRoot(routes),
  ],
})
export class sessionModule {}
