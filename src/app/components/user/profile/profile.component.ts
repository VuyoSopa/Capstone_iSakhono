import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit{

  currentUser: any
  
  constructor(
    private storage: StorageService,
    private router: Router    
    ) {}

  ngOnInit(): void {

    // if(!window.sessionStorage.getItem('auth-token')){
    //   this.router.navigate(['/sign-in'])
    //   // setTimeout(() => {
    //   //   window.location.replace("home") // last line
    //   // }, 2000);
    // }
    if(!window.sessionStorage.getItem('token')){
      this.router.navigate(['/sign-in'])
    
    }
    this.currentUser = this.storage.getUser()
    console.log(this.currentUser);
    
    
  }
  searchJobs(){
    window.location.replace("search-job")
  }

}
