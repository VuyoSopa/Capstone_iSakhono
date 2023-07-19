import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';
import { PostjobAuthService } from 'src/app/service/postjob.auth.service';
import { PostjobStorageService } from 'src/app/service/postjob.storage.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss']
})
export class PostJobComponent implements OnInit {

  form: any = {
    jobtitle: null,
    location: null,
    work_type: null,
    job_description: null
  };
  isPosted = false;
  isNotPosted = false;
  errorMessage = '';

  constructor(
    
    private jobService: JobService,
    private router: Router
    ) {}

  ngOnInit() {
    if(!window.sessionStorage.getItem('token')){
      this.router.navigate(['/sign-in'])
    }
  }

  post() {
    // this.user.changeData(data);
    
    this.jobService.createJob(this.form).subscribe({
      next: form => {
        console.log(form);
        
        this.isPosted = true;
        this.isNotPosted = false;
        window.location.replace("company-profile") // last line
      },
      error: err => {
        console.error(err.message)
        // console.log("Hello World")

        this.errorMessage = err.error.message;
        this.isNotPosted = true;
      }
    })
  }
  // addd

}


