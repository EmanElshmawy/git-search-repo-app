import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../shared/login.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  constructor( private LoginService: LoginService) { }
  username;
  userData;
  profileData;

  ngOnInit(): void {
    this.getUserData();
  }
  getUserData() {
    this.username = localStorage.getItem('userData')
    console.log("hnaaaas");
    
    console.log(this.username);
    
    this.LoginService.userLogin(this.username).subscribe(data => {
      this.profileData = data;
      console.log(data);
    });
  }
}
