import { Injectable } from '@angular/core';

const POSTJOB_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class PostjobStorageService {

  constructor() { }

  
  clean(): void {
    window.sessionStorage.clear();
  }
 
  public saveJob(job: any): void {
    window.sessionStorage.removeItem(POSTJOB_KEY);
    window.sessionStorage.setItem(POSTJOB_KEY, JSON.stringify(job));
  }

  public getJob(): any {
    const job = window.sessionStorage.getItem(POSTJOB_KEY);
    console.log(job)
    if (job) {
      return JSON.parse(job);
    }

    return {};
  }

  public isPosted(): boolean {
    const job = window.sessionStorage.getItem(POSTJOB_KEY);
    console.log(job)
    if (job) {
      return true;
    }

    return false;
  }
}
