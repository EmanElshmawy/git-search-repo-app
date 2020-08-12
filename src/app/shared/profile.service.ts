import { FormsModule } from '@angular/forms';
import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../enviroment';
import { map } from "rxjs/operators";
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = environment.baseURl;
  clientId = environment.clientId;
  clientSecret = environment.clientSecret;
  username;


  private userData = new BehaviorSubject<any>("");
  currentData = this.userData.asObservable();

  getCurrentValue(data:any){
    this.userData.next(data);
  }

  constructor(private http: HttpClient) {  }

  getRepos(user) {
    // console.log(data);
    // this.encodeAuth = data.username + ':' + data.password
    return this.http.get(this.baseUrl + 'users/' + user + '/repos?client_id' + this.clientId + '&client_secret' + this.clientSecret)
  }

 
}
