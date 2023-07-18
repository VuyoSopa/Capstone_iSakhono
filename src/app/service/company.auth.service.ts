import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { CompanyService } from './company.service';

// const auth_api = 'https://i-sakhono-backend.vercel.app/api/auth/'
const base_url = "https://i-sakhono-backend.vercel.app/api/company/"
// const base_url = "http://localhost:8080/api/company/"
let token = window.sessionStorage.getItem("token") ? window.sessionStorage.getItem("token") : {}
let httpOptions = {
  headers: new HttpHeaders({ 'x-access-token': `${token}`})
}
@Injectable({
  providedIn: 'root'
})
export class CompanyAuthService {

  constructor(
    private http: HttpClient
  ) { }
  
  registerCompany(companyname: string, company_email: string, industry: string, location: string, password: string){
    return this.http.post(
      base_url +"signup", {companyname, 
        company_email, 
        industry, 
         location,   
        password})
  }

  login(companyname: string, password: string): Observable<any>  {
    return this.http.post(
      base_url + 'signin',
      {
        companyname,
        password,
      }
    );
  }

  logout(){
    sessionStorage.clear()
  }

  getCompany(id: any) {
    return this.http.get(base_url+id, httpOptions)
  }

  updateCompanyProfile(data: any, id: any){
    return this.http.put(base_url+id, data, httpOptions)
  }

  deleteCompany(id: any) {
    return this.http.delete(base_url+id, httpOptions)
  }


}

