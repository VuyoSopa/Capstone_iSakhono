import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyAuthService } from 'src/app/service/company.auth.service';
import { CompanyService } from 'src/app/service/company.service';
import { CompanyStorageService } from 'src/app/service/company.storage.service';
import { JobService } from 'src/app/service/job.service';
// import { EmployerService } from 'src/app/service/employers.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {


  currentEmployer: any
  profile: any
  jobs: any
 
  constructor(
    private storage: CompanyStorageService,
    private companyService: CompanyAuthService,
    private jobService: JobService,
    private router: Router
    ) {}
  ngOnInit(): void {
    if(!window.sessionStorage.getItem('token')){
      this.router.navigate(['/sign-in'])
    
    }
    this.currentEmployer = this.storage.getEmployer()
    console.log(this.currentEmployer);
    this.getProfile();
    this.getMyJobs();
    
  }
  searchCandidates(){
    window.location.replace("search-candidate")
  }

  getProfile(){
    
    this.companyService.getCompany(this.currentEmployer.id).subscribe({
      next: data => {
        this.profile = data
        console.log(this.profile)
      },
      error: e => {
        console.error(e.error)
      }
    })
  }

  getMyJobs(){
    this.jobService.getCompanyJobs(this.currentEmployer.id).subscribe({
      next: data => {
        this.jobs = data
        console.log(this.jobs)
      }
    })
  }

  deleteJob(id: any){
    this.jobService.deleteJob(this.currentEmployer.id, id).subscribe({
      next: data => {
        console.log(data)
        window.location.reload()
      },
      error: e => {
        console.error(e.error)
      }
    })
  }

}
