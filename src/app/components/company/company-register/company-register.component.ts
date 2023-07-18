import { Component, OnInit } from '@angular/core';
import { CompanyAuthService } from 'src/app/service/company.auth.service';

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.scss']
})
export class CompanyRegisterComponent implements OnInit {
  
  form: any = {
    companyname: null,
    company_email: null,
    industry: null,
    location: null,
    services: null,
    // contactperson: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    // private user: UserService
    private CompanyAuthService: CompanyAuthService
    ) { }

  ngOnInit() {
    // this.company.currentUserData.subscribe((userData: any) => this.userData = userData)
  }
  register(){
    const { companyname, company_email, industry, location, password } = this.form;
    console.log(this.form)
    this.CompanyAuthService.registerCompany(companyname, company_email, industry, location, password).subscribe({
      next: data => {
        console.log(data)
        console.log("Hello WOrld")
        this.isSuccessful = true;
        if(this.isSuccessful){
          // this.authService.login(username,password).subscribe()
        }
        this.isSignUpFailed = false;
        window.location.replace("company-login") // last line
      },
      error: err => {
        console.error(err.message)
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    })
    // this.company.changeData(data);
  }
  
}


