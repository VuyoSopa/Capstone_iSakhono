import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const base_url = "https://i-sakhono-backend.vercel.app/api/jobs/"
// const base_url = "http://localhost:8080/api/jobs/"
const token = window.sessionStorage.getItem("token") ? window.sessionStorage.getItem("token") : null

let httpOptions = {
  headers: new HttpHeaders({ 
    'x-access-token': `${token}` 
  })
};

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
    private http: HttpClient
  ) { }

  getAllJobs(){
    
    return this.http.get(base_url, httpOptions)
  }

  getOnejob(id: any){
    return this.http.get(base_url + id, httpOptions)

  }

  getCompanyJobs(companyid: any) {
    return this.http.get(base_url + "company/" + companyid, httpOptions )
  }

  createJob(data: any){
    return this.http.post(base_url, data, httpOptions)
  }

  updateJob(data: any, companyid: any, id: any){
    return this.http.put(base_url + `${companyid}/${id}`, data, httpOptions)
  }

  deleteJob(companyid: any, id: any){
    return this.http.delete(base_url + `${companyid}/${id}`, httpOptions)
  }
}
