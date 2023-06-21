import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SessionComponent } from "./components/session/session.component";
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: "session",
    canActivate: [],
    children: [
      { path: ":channel/:id", component: SessionComponent },

    ],
  },
];

@NgModule({
  declarations: [
    SessionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class sessionModule {}