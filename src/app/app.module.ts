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


import { EditProfileMentorComponent } from './modules/mentor-module/components/edit-profile-mentor/edit-profile-mentor.component';
import { EditProfileComponent } from './modules/mentee-module/components/edit-profile-mentee/edit-profile.component';
import { IndexComponent } from './shared/index/index.component';
import { UpcomingSessionsComponent } from './shared/upcoming-sessions/upcoming-sessions.component';
import { RequestsComponent } from './shared/requests/requests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
// import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { JsonPipe } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ListServicesComponent } from './shared/list-services/list-services.component';

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
    IndexComponent,
    PaginationComponent,
    ListServicesComponent,


  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    adminModule,
    menteeModule,
    mentorModule,
    MatIconModule,
    sessionModule,
    NgbModule,
    ReactiveFormsModule,
    CommonModule, MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    JsonPipe



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
    IndexComponent,
    // PaginationComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
