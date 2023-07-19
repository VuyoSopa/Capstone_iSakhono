import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {
  
  form: any = {
    fullname: null,
    idNumber: null,
    contact: null,
    email: null,
    Address: null,
    experience: null,
    message: null,
    cv: null

  };
  isSuccessful = false;
  isSubmitFailed =false;
  errorMessage = '';

  constructor(

    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(!window.sessionStorage.getItem('token')){
      this.router.navigate(['/sign-in'])
    
    }
    
  }
  submitApplication(){
    const {fullname, idNumber, contact, email, Address, experience, message, cv } = this.form;
    console.log(this.form)
    this.authService.submitApplication(fullname, idNumber, contact, email, Address, experience, message, cv ).subscribe({
      next: data => {
         console.log(data)
        console.log("Hello WOrld")
        this.isSuccessful = true;
        if(this.isSuccessful){
          // this.authService.login(username,password).subscribe()
        }
        this.isSubmitFailed = false;
        window.location.replace("application-feedback") // last line
      },
      error: err => {
        
        this.errorMessage = err.error.message;
        this.isSubmitFailed = true;
      }
    })
    // this.user.changeData(data);
  }
  
}
      
