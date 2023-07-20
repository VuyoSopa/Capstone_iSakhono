import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/user';
// import { UserService } from 'src/app/service/user.service';
// import { NgForm } from '@angular/forms'
// import { FormGroup, FormControl } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})

export class ProfileEditComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id')
  user!: User
  constructor (
    // private userService: UserService,
    private auth: AuthService,
    private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      
      this.auth.getOneUser(this.id).subscribe({
        next: data => {
          this.user = data;
          console.log(this.user)
        }
      })
    }

  form = {

          username: "", 
          dateofbirth: "",
          gender: "",
          phone_number: "",  
          email: "",
          Home_address: "",
          skills: "",
          work_experience: ""
  }

  // user: any [] = []

  onSave(){
    // console.log(this.form)
    // this.user.push(this.form)
    // console.log(this.user)
    // const data = this.form
    
    // console.log(data)
    // this.auth.login(`${data.firstName} + `)
    // this.user.username = this.form.firstName + " " + this.form.lastName
    this.auth.updateUser(this.user, this.id).subscribe({
      next: res => {
        console.log(res)
        // this.auth.login()
        window.location.replace("user-profile")
      },
      error: err => {
        console.error(err)
      }
    })

    // 
    
  }

  
 


}



