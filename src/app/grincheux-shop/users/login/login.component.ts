import { Component } from '@angular/core';
import {LoginService} from "../services/login.service";
import {Login} from "../../classes/login";
import {NgToastService} from "ng-angular-popup";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  newLogin : Login = new Login();
  user : any = {};
  constructor(private  loginService: LoginService, private toast: NgToastService, private router: Router) {
  }
   logToApi() {
     this.loginService.login(this.newLogin).subscribe({
       next: () => {
         this.router.navigateByUrl('/')
         this.success();
       },
       error: () => {
         this.error("Nom d'utilisateur ou mot de passe invalide.");
       }
     });
  }

  success() {
    this.toast.success({detail:"Succès",summary:'Vous avez été correctement connecté.',duration:5000});
  }
  error(message: string) {
    this.toast.error({ detail: "Erreur", summary: message, duration: 5000})
  }
}
