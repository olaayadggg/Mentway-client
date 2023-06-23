import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './modules/auth-module/signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './modules/auth-module/login/login.component';
import { adminModule } from './modules/admin-module/admin.module';
import { menteeModule } from './modules/mentee-module/mentee.module';
import { mentorModule } from './modules/mentor-module/mentor.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './about-us/about-us.component';
import { sessionModule } from './modules/session-module/session.module';
import { MatIconModule } from '@angular/material/icon';
import { PaymentMethodComponent } from './shared/payment-method/payment-method.component';
import { RateComponent } from './shared/rate/rate/rate.component';
import { ViewServiceComponent } from './shared/view-service/view-service.component';
import { HttpClientModule } from '@angular/common/http';
import { UpcomingSessionsComponent } from './modules/dashboard/components/upcoming-sessions/upcoming-sessions.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { IndexComponent } from './modules/dashboard/components/index/index.component';
import { RequestsComponent } from './modules/dashboard/components/requests/requests.component';
import { EditProfileMentorComponent } from './modules/mentor-module/components/edit-profile-mentor/edit-profile-mentor.component';
import { EditProfileComponent } from './modules/mentee-module/components/edit-profile-mentee/edit-profile.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AboutUsComponent,
    PaymentMethodComponent,
    RateComponent,
    ViewServiceComponent,
    UpcomingSessionsComponent,
    RequestsComponent,
    EditProfileMentorComponent,
    EditProfileComponent,
    IndexComponent


  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    adminModule,
    menteeModule,
    mentorModule,
    MatIconModule,
    sessionModule,
    DashboardModule,
    NgbModule,
    ReactiveFormsModule,
    CommonModule



  ],
  providers: [],
  exports: [
    PaymentMethodComponent,
    RateComponent,
    ViewServiceComponent,
    UpcomingSessionsComponent,
    RequestsComponent,
    EditProfileMentorComponent,
    EditProfileComponent,
    IndexComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
