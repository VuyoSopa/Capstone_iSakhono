import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const company_api = "https://i-sakhono-backend.vercel.app/api/employers/"

@Injectable()
export class EmployerService {
  private companyDataSource = new BehaviorSubject({companyname : '', password : ''});
  currentCompanyData = this.companyDataSource.asObservable();
  constructor(
    private http: HttpClient
  ) { }
  changeData(newCompanyData:any)  {
    this.companyDataSource.next(newCompanyData)
  }

  getCompany(data: any, id: any){
    return this.http.get(company_api+id)
  }
  
  updateCompany(data: any, id: any){
    return this.http.put(company_api+id, data)
  }
}