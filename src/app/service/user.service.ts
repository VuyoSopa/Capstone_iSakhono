import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const user_api = "https://i-sakhono-backend.vercel.app/api/users/"
const token = window.sessionStorage.getItem("token") ? window.sessionStorage.getItem("token") : null

let httpOptions = {
  headers: new HttpHeaders({ 
    'x-access-token': `${token}` 
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUser(data: any, id: any){
    return this.http.get(user_api+id)
  }
  updateUser(data: any, id: any){
    return this.http.put(user_api+id, data)
  }

  getAllUsers(){
    
    return this.http.get(user_api, httpOptions)
  }
}
