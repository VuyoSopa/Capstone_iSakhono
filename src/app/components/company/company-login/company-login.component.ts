import { Component } from '@angular/core';
import { CompanyAuthService } from 'src/app/service/company.auth.service';
import { CompanyStorageService } from 'src/app/service/company.storage.service';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.scss']
})
export class CompanyLoginComponent {

  form: any = {
    companyname: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    // private user: UserService
    private CompanyAuthService:CompanyAuthService,
    private CompanyStorageService: CompanyStorageService
    ) {}

  ngOnInit() {
    // this.user.currentUserData.subscribe(userData => (this.userData = userData));
    if (this.CompanyStorageService.isLoggedIn()) {
      this.isLoggedIn = true;
      // this.roles = this.storageService.getUser().roles;
    }
  }

  changeData(event:any) {
    var msg = event.target.value;
    // this.user.changeData(msg);
  }
  login() {
    // this.user.changeData(data);
    const { companyname, password } = this.form

    console.log(this.form)

    this.CompanyAuthService.login(companyname, password).subscribe({
      next: data => {
        console.log(data);
        
        this.CompanyStorageService.saveEmployer(data);
        this.CompanyStorageService.saveToken(data.token)
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        window.location.replace("company-profile") // last line
      },
      error: err => {
        console.error(err.message)
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    })
    
  }

}
