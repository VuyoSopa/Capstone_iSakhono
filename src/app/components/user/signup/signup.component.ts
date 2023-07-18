import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { StorageService } from 'src/app/service/storage.service';
// import { UserService } from "../../../service/user.service";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null,
    c_password: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    // private user: UserService
    private authService: AuthService,
    private storageService: StorageService
    ) { }

  ngOnInit() {
    //  this.user.currentUserData.subscribe((userData: any) => this.userData = userData)
  //   if (this.storageService.isSuccessful()) {
  //     this.isSuccessful = true;
  // }
}
  register(){
    const { username, email, password } = this.form;
    
    console.log(this.form)
    this.authService.registerUser(username,email,password).subscribe({
      next: data => {
        console.log(data)

        this.storageService.saveUser(data);
      
        this.isSuccessful = true;
        if(this.isSuccessful){
          // this.authService.login(username,password).subscribe()
        }
        this.isSignUpFailed = false;
        window.location.replace("user-profile") // last line
      },
      error: err => {
        
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    })
    // this.user.changeData(data);
  }
  
}
