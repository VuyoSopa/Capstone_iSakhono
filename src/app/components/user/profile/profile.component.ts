import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit{

  currentUser: any
  
  constructor(
    private storage: StorageService
    
    ) {}

  ngOnInit(): void {
    this.currentUser = this.storage.getUser()
    console.log(this.currentUser);
    
    
  }
  searchJobs(){
    

    window.location.replace("search-job")
  }

}
