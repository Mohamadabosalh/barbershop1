import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AllAppointmentComponent } from './all-appointment/all-appointment.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TodaysAppointmentsComponent } from './todays-appointments/todays-appointments.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'app-dashboard',
    pathMatch:'full'
  },
  {
    path:'app-dashboard',
    component:DashboardComponent
  },
  {
    path:'app-about-us',
    component:AboutUsComponent
  },
  {
    path:'app-add-appointment',
    component:AddAppointmentComponent
  },
  {
    path:'app-all-appointment',
    component:AllAppointmentComponent
  },
  {
    path:'app-home-page',
    component:HomePageComponent
  },
  {
    path:'app-logout',
    component:LogoutComponent
  },
  {
    path:'app-profile',
    component:ProfileComponent
  },
  {
    path:'app-signin',
    component:SigninComponent
  },
  {
    path:'app-signup',
    component:SignupComponent
  },
  {
    path:'app-todays-appointments',
    component:TodaysAppointmentsComponent
  },
  {
    path:'app-forget-password',
    component:ForgetPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }