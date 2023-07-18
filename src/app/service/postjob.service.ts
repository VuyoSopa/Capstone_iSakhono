import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const postjob_api = "https://i-sakhono-backend.vercel.app/api/jobs/"
const token = JSON.parse(`${window.sessionStorage.getItem("auth-user")}`).token

@Injectable()
export class PostjobService {
  // private jobDataSource = new BehaviorSubject({jobtitle : '',location: '' , work_type: '' , job_description: ''});
  // currentJobData = this.jobDataSource.asObservable();

  httpOptions = {
    headers: new HttpHeaders({ 
      'x-access-token': `${token}` 
    })
  };
  constructor(
    private http: HttpClient
  ) { }

  // changeData(newJobData:any)  {
  //   this.jobDataSource.next(newJobData)
  // }
  getJob(data: any, id: any){
    return this.http.get(postjob_api+id)
  }

  getAllJobs(){
    console.log(token)
    return this.http.get(postjob_api, this.httpOptions)
  }
  
  updateJob(data: any, id: any){
    return this.http.put(postjob_api+id, data)
  }
  
}