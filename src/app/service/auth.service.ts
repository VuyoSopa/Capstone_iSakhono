import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { application } from 'express';
import { environment } from 'src/environments/environment';

const base_url = 'https://i-sakhono-backend.vercel.app/api/'
const user_api = "https://i-sakhono-backend.vercel.app/api/users/"
// const base_url = "http://localhost:8080/api"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(username: string, email: string, password: string){
    return this.http.post(base_url + "auth/signup", {username,email,password})
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      base_url + 'auth/signin',
      {
        username,
        password,
      }
    );
  }

  submitApplication(fullname: string, idNumber:string, contact:string, email:string, Address:string, experience:string, message:string, cv:string){
    return this.http.post (
      base_url + 'application-feedback',
      {
        fullname, 
        idNumber, 
        contact, 
        email, 
        Address, 
        experience, 
        message, 
        cv 
      }
    )
  }

  logout(){
    sessionStorage.clear()
  }
  getOneUser(id: any){
    return this.http.get(user_api+id)

  }

  updateUser(data: any, id: any){
    return this.http.put(user_api+id, data)
  }
}
