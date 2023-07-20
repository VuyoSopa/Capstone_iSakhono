import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit{

  currentUser: any
  user: any
  
  constructor(
    private storage: StorageService,
    private auth: AuthService,
    private router: Router,    
    ) {}

  ngOnInit(): void {

    
    if(!window.sessionStorage.getItem('token')){
      this.router.navigate(['/sign-in'])
    
    }
    this.currentUser = this.storage.getUser()
    // console.log(this.currentUser);
    this.auth.getOneUser(this.currentUser.id).subscribe({
      next: data => {
        this.user = data;
        console.log(this.user)
      }
    })
    
    
  }
  searchJobs(){
    window.location.replace("search-job")
  }



}
