import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {ProfileService} from "../services/profile.service";

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.scss'
})
export class InfosComponent implements OnInit{
  currentUser : any;
  constructor(private loginService : LoginService, private profileService : ProfileService){
  }
  ngOnInit() {
    this.getInfos()
  }

  getInfos() {
    this.loginService.me().subscribe({
      next: (currentUser) => {
        this.currentUser = currentUser;
      }
    });
  }

  changeInfos() {
    this.profileService.changeInfos(this.currentUser).subscribe( {
      next: (resultat) => {
        delete this.currentUser.password;
        delete this.currentUser.confirmpassword;
      }
    })
  }
}
