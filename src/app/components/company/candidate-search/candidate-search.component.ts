import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-candidate-search',
  templateUrl: './candidate-search.component.html',
  styleUrls: ['./candidate-search.component.scss']
})
export class CandidateSearchComponent implements OnInit {
  
  users: any
  constructor(
    
    private userService: UserService,
    private router: Router
    ) {}

  ngOnInit(): void {
    
    this.getAll()
  }
 

  getAll() {
    if(!window.sessionStorage.getItem('token')){
      this.router.navigate(['/sign-in'])
      // setTimeout(() => {
      //   window.location.replace("home") // last line
      // }, 2000);
    
    }
    this.userService.getAllUsers().subscribe({
      next: data => {
        this.users = data
        console.log(this.users)
      },
      error: e => {
        console.error(e.error.message)
      }
    })
  }
  isReadMore = true;

  showText() {
     this.isReadMore = !this.isReadMore
  }

}
