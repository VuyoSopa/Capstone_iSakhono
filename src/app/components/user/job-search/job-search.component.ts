import { Component, OnInit } from '@angular/core';
// import { PostjobStorageService } from 'src/app/service/postjob.storage.service';
import { JobService } from 'src/app/service/job.service';



@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss']
})
export class JobSearchComponent implements OnInit {

  // currentJob: any
  jobs: any
  constructor(
    // private PostjobStorageService: PostjobStorageService,
    private jobService: JobService
    ) {}

  ngOnInit(): void {
    // this.currentJob = this.PostjobStorageService.getJob()
    this.getAll()
  }
 

  getAll() {
    this.jobService.getAllJobs().subscribe({
      next: data => {
        this.jobs = data
        console.log(this.jobs)
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

