import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { StorageService } from 'src/app/service/storage.service';
// import { UserService } from "../../../service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    // private user: UserService
    private authService: AuthService,
    private storageService: StorageService
    ) {}

  ngOnInit() {
    // this.user.currentUserData.subscribe(userData => (this.userData = userData));
    if (this.storageService.isLoggedIn()) {
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
    const { username, password } = this.form

    this.authService.login(username, password).subscribe({
      next: data => {
        console.log(data);
        
        this.storageService.saveUser(data);
        this.storageService.saveToken(data.token)
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        window.location.replace("user-profile") // last line
      },
      error: err => {
        console.error("Details required")
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    })
    
  }

}
