import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../shared/login.service';
import { ProfileService }  from '../shared/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData;
  loginForm: FormGroup;
  submitted = false;
  errormsg = false;
  errormsgNotfound = false;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
     private LoginService: LoginService ,
     private ProfileService: ProfileService) {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  ngOnInit() {

  }

  // todo craete alert on login error 
  public loginSubmit() {
    // console.log(this.loginForm.value);
    // console.log("1111");

    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      this.LoginService.userLogin(this.loginForm.value.username).subscribe(data => {
        console.log(data);
        
        this.userData =data;
        this.saveLoginDataInLocalStorage(this.loginForm.value.username);
        // console.log(this.loginForm.value.username);
        this.ProfileService.getCurrentValue(this.userData);
        this.router.navigateByUrl('profile');
      }, (errorMessage) => {
        console.log(errorMessage.status);
        if (errorMessage.status == 404) {

          this.errormsgNotfound = true;
          this.errormsg = false;

        } else if (errorMessage.status == 401) {

          this.errormsgNotfound = false;
          this.errormsg = true;

        }
      });
    }
  }

  // //  send the data to local storage services
  private saveLoginDataInLocalStorage(userData) {
    localStorage.setItem('userData', userData);
  }

}
