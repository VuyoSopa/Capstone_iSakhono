import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-profile-edit',
  templateUrl: './company-profile-edit.component.html',
  styleUrls: ['./company-profile-edit.component.scss']
})
export class CompanyProfileEditComponent implements OnInit{
  
  userDetails = {

    companyname: "",
    industry: "",
    location: "",
     contactperson: "",
    phoneNumber: "",  
      company_email: "",
      
}

constructor (
  private router: Router
){}

ngOnInit(): void {
  if(!window.sessionStorage.getItem('token')){
    this.router.navigate(['/sign-in'])
  
  }
}
user: any [] = []

onSave(){

  
console.log(this.userDetails)
this.user.push(this.userDetails)
// console.log(this.user)

}
  


}
