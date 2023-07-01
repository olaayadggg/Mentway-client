import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './modules/auth-module/signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './modules/auth-module/login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PaymentMethodComponent } from './shared/payment-method/payment-method.component';
import { AuthGuard } from './guards/auth.guard';
import { PaymentStatusComponent } from './shared/payment-status/payment-status.component';
import { AbcComponent } from './shared/abc/abc.component';
const routes: Routes = [
  { path: 'register', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'abc', component: AbcComponent },
  { path: 'payment', component: PaymentMethodComponent, canActivate: [AuthGuard] },
  { path: 'payment/status', component: PaymentStatusComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
