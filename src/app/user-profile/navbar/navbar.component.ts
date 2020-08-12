import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { LoginService } from '../../shared/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  profileData: any;
  username;
  constructor(private ProfileService: ProfileService , private LoginService:LoginService) { }

  ngOnInit(): void {
    this.getuser();
  }
  getuser() {
    this.ProfileService.currentData.subscribe(res => this.profileData = res)
      this.username = localStorage.getItem('userData')      
      // console.log(this.username);
      
      this.LoginService.userLogin(this.username).subscribe(data => {
        this.profileData = data;
        console.log(data);
      });
    }
}
