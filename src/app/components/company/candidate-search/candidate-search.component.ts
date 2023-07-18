import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-candidate-search',
  templateUrl: './candidate-search.component.html',
  styleUrls: ['./candidate-search.component.scss']
})
export class CandidateSearchComponent implements OnInit {
  
  users: any
  constructor(
    
    private userService: UserService
    ) {}

  ngOnInit(): void {
    
    this.getAll()
  }
 

  getAll() {
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
