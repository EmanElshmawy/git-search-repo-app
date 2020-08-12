import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ProfileService } from '../../shared/profile.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  constructor(private http: HttpClient, private ProfileService: ProfileService) { }
  data: any;
  repos: any;
  searchText: string;
  profileData:any;
  username;
  isTyping = false;
  ngOnInit(): void {
    this.getUserRepos()
  }
  getUserRepos() {
      // this.ProfileService.currentData.subscribe( res=> this.profileData = res )
      this.username = localStorage.getItem('userData')

    this.ProfileService.getRepos(this.username).subscribe(data => {
      console.log(data);
      this.repos = data;
    }, (error) => {
      // console.log(error);

    });
  }
  findRepo() {
    console.log(this.searchText);
    if (this.searchText != '') {
      this.isTyping = true;
      this.repos = this.repos.filter(res => {
        return res.name.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
      });
    } else if (this.searchText == "") {
      this.isTyping = false;
      this.ngOnInit();
    }
  }
}
