import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.scss']
})
export class JobEditComponent implements OnInit {
  job: any
  id = this.route.snapshot.paramMap.get("id")

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if(!window.sessionStorage.getItem('token')){
      this.router.navigate(['/sign-in'])
    }
    this.getJob()
  }

  getJob(){
        
    this.jobService.getOnejob(this.id).subscribe({
      next: data => {
        this.job = data
        console.log(this.job)
      }
    })
  }

  updatePost() {
    this.jobService.updateJob(this.job, this.job.companyid, this.id).subscribe({
      next: data => {
        console.log(data)
        window.location.replace("company-profile")
      },
      error: e => {
        console.error(e.error)
      }
    })
  }
}
