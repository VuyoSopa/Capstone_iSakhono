import { JobEditComponent } from './components/company/job-edit/job-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { JobSearchComponent } from './components/user/job-search/job-search.component';
import { ProfileEditComponent } from './components/user/profile-edit/profile-edit.component';
import { LoginComponent } from './components/user/login/login.component';
import { CompanyRegisterComponent } from './components/company/company-register/company-register.component';
import { CompanyLoginComponent } from './components/company/company-login/company-login.component';
import { CandidateSearchComponent } from './components/company/candidate-search/candidate-search.component';
import { CompanyProfileEditComponent } from './components/company/company-profile-edit/company-profile-edit.component';
import { BottomNavbarComponent } from './components/user/bottom-navbar/bottom-navbar.component';

import { CompanyProfileComponent } from './components/company/company-profile/company-profile.component';
import { CompanyBottomNavbarComponent } from './components/company/company-bottom-navbar/company-bottom-navbar.component';
import { ApplicationFeedbackComponent } from './components/user/application-feedback/application-feedback.component';
import { CompanyPostingJobFeedbackComponent } from './components/company/company-posting-job-feedback/company-posting-job-feedback.component';
import { PostJobComponent } from './components/company/post-job/post-job.component';
import { ApplicationFormComponent } from './components/user/application-form/application-form.component';


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {
    path: "home", component: HomeComponent
  },
  {
    path: "register-user", component: SignupComponent
  },
  {
    path: "sign-in", component: LoginComponent
  },
  {
    path: "user-profile", component: ProfileComponent
  },
  {
    path: "search-job", component: JobSearchComponent
  },
  {
    path: "profile-edit", component: ProfileEditComponent
  },
  {
    path: "company-register", component: CompanyRegisterComponent
  },
  {
    path: "company-login", component: CompanyLoginComponent
  },
  {
    path: "candidate-search", component: CandidateSearchComponent
  },
  {
    path: "company-profile", component: CompanyProfileComponent
  },
  {
    path: "company-profile-edit", component: CompanyProfileEditComponent
  },
  {
    path: "bottom-navbar", component: BottomNavbarComponent
  },
  {
    path: "company-bottom-navbar", component: CompanyBottomNavbarComponent
  },
  {
    path: "application-feedback", component: ApplicationFeedbackComponent
  },
  {
    path: "post-feedback", component: CompanyPostingJobFeedbackComponent
  },
  {
    path: "job-post", component: PostJobComponent
  },
  {
    path: "job-edit/:id", component: JobEditComponent
  },
  {
    path: "application-form", component: ApplicationFormComponent
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
