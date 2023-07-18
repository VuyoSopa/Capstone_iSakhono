import { Injectable } from '@angular/core';


const COMPANY_KEY = 'auth-user';
const COMPANY_TOKEN = 'token'

@Injectable({
  providedIn: 'root'
})
export class CompanyStorageService {

  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveEmployer(employer: any): void {
    window.sessionStorage.removeItem(COMPANY_KEY);
    window.sessionStorage.setItem(COMPANY_KEY, JSON.stringify(employer));
  }

  public saveToken(token: any): void {
    window.sessionStorage.removeItem(COMPANY_TOKEN);
    window.sessionStorage.setItem(COMPANY_TOKEN, token);
  }

  public getEmployer(): any {
    const employer = window.sessionStorage.getItem(COMPANY_KEY);
    // console.log(employer)
    if (employer) {
      return JSON.parse(employer);
    }
    // console.log(employer)
    return {};
  }

  public isLoggedIn(): boolean {
    const employer = window.sessionStorage.getItem(COMPANY_KEY);
    // console.log(EMPLOYER_KEY)
    console.log(employer)
    if (employer) {
      return true;
    }
    

    return false;
  }
}