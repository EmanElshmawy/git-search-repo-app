import { environment } from './../enviroment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  encodeAuth: any;
  baseUrl = environment.baseURl;
  clientId = environment.clientId;
  clientSecret = environment.clientSecret;
  token = environment.token;
  password;
  constructor(private http: HttpClient) { }


  // redirectfunction() {
  //   return this.http.post("https://github.com/login/oauth/access_token=" + this.token + "?client_id =" + this.clientId + "&redirect_uri=http://localhost:4200/login&client_secret =" + this.clientSecret,
  //     this.token)
  // }
  userLogin(user ) {
    // console.log(user.username);

    // return this.http.get('https://github.com/login/oauth/'+this.token)
    // return this.http.get(`https://github.com/login/oauth/authorize?client_id=${this.clientId}&redirect_uri=http://localhost/path`)
    return this.http.get(this.baseUrl + "users/" + user + "?client_id" + this.clientId + "&client_secret" + this.clientSecret,
      user)
    //  return this.http.post(this.baseUrl + "users/" + userData.username + "?client_id" + this.clientId + "&client_secret" + this.clientSecret,
    //  {headers:this.createAuthorizationHeader()}).pipe(
    //   map((response:Response)=>response)
    // );
  }

  // private createAuthorizationHeader() {
  //   const headers: HttpHeaders = new HttpHeaders({
  //     "x-github-otp": this.token,
  //     "authorization": this.password,
  //     'content-type': 'application/json'
  //   });
  //   return headers;
  // }

}
