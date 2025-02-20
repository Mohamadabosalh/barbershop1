import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AllAppointmentComponent } from './all-appointment/all-appointment.component';
import { TodaysAppointmentsComponent } from './todays-appointments/todays-appointments.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddAppointmentComponent,
    AllAppointmentComponent,
    TodaysAppointmentsComponent,
    ProfileComponent,
    LogoutComponent,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    AboutUsComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }