import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';
// import { NgForm } from '@angular/forms'
// import { FormGroup, FormControl } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})

export class ProfileEditComponent {

  constructor (
    // private userService: UserService,
    private auth: AuthService,
    private route: ActivatedRoute
    ) {}

  form = {

          firstName: "",
          lastName: "",
          dateOfBirth: "",
          gender: "",
          phoneNumber: "",  
          email: "",
          homeAddress: "",
          skills: ""
  }

  // user: any [] = []

  onSave(){
    // console.log(this.form)
    // this.user.push(this.form)
    // console.log(this.user)
    const data = this.form
    const id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    // this.auth.login(`${data.firstName} + `)
    this.auth.updateUser(data, id).subscribe({
      next: res => {
        console.log(res)
        // this.auth.login()
      },
      error: err => {
        console.error(err)
      }
    })

    window.location.replace("user-profile")
    
  }

  
 


}



