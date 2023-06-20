import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './modules/auth-module/signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './modules/auth-module/login/login.component';
import { EditProfileComponent } from './modules/mentee-module/components/edit-profile/edit-profile.component';

const routes: Routes =[
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    {path: 'editProfile', component:EditProfileComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
