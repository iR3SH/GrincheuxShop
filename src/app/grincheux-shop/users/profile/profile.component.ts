import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  currentUser : any;
  @ViewChild("sidenav") child : any
    constructor(private loginService : LoginService) {
    }
    ngAfterViewInit() {
      this.child.toggle();
    }
    ngOnInit() {
      this.loginService.me().subscribe({
        next: (currentUser) => {
          this.currentUser = currentUser;
        }
      });
    }
}
