import { Component } from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.scss'
})
export class InfosComponent {
  currentUser : any;
  constructor(loginService : LoginService){
    this.currentUser = loginService.getUser();
  }

  changeInfos() {
    console.log(this.currentUser)
  }
}
