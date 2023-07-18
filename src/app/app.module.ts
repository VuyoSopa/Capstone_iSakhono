import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ProfileEditComponent } from './components/user/profile-edit/profile-edit.component';
import { JobSearchComponent } from './components/user/job-search/job-search.component';
import { CompanyProfileComponent } from './components/company/company-profile/company-profile.component';
import { CandidateSearchComponent } from './components/company/candidate-search/candidate-search.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { CompanyRegisterComponent } from './components/company/company-register/company-register.component';
import { CompanyLoginComponent } from './components/company/company-login/company-login.component';
import { CompanyProfileEditComponent } from './components/company/company-profile-edit/company-profile-edit.component';
import { BottomNavbarComponent } from './components/user/bottom-navbar/bottom-navbar.component';
import { CompanyBottomNavbarComponent } from './components/company/company-bottom-navbar/company-bottom-navbar.component';
import { ApplicationFormComponent } from './components/user/application-form/application-form.component';
import { CompanyPostingJobFeedbackComponent } from './components/company/company-posting-job-feedback/company-posting-job-feedback.component';
import { ApplicationFeedbackComponent } from './components/user/application-feedback/application-feedback.component';
import { PostJobComponent } from './components/company/post-job/post-job.component';
import { JobEditComponent } from './components/company/job-edit/job-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    ProfileEditComponent,
    JobSearchComponent,
    CompanyProfileComponent,
    CandidateSearchComponent,
    SignupComponent,
    CompanyRegisterComponent,
    CompanyLoginComponent,
    CompanyProfileEditComponent,
    BottomNavbarComponent,
    CompanyBottomNavbarComponent,
    PostJobComponent,
    ApplicationFeedbackComponent,
    CompanyPostingJobFeedbackComponent,
    ApplicationFormComponent,
    JobEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
