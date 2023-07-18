import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

const auth_api = 'https://i-sakhono-backend.vercel.app/api/auth/'
const postjob_api = "https://i-sakhono-backend.vercel.app/api/jobs"

@Injectable({
  providedIn: 'root'
})
export class PostjobAuthService {

  constructor(
    private http: HttpClient
  ) { }

  //  Post(SkillsAndExperienceRequired: string, ResponsibilitiesAndDutiesRequired : string, Location: string){
  //   return this.http.post(auth_api+"job-post", {SkillsAndExperienceRequired,ResponsibilitiesAndDutiesRequired, Location})
  // }

  Post(jobtitle: string, location : string , work_type:string , job_description: string): Observable<any> {
    return this.http.post(
      postjob_api + "createjob",
      {
       jobtitle,
       location,
       work_type,
       job_description
       

      }
    );
  }

  // logout(){
  //   sessionStorage.clear()
  // }
  getOneJob(id: any){
    return this.http.get(postjob_api+id)

  }
  getAllJobs(){
    console.log()
    return this.http.get(postjob_api)
  }

  updateJob(data: any, id: any){
    return this.http.put(postjob_api+id, data)
  }
}
