import { Component } from '@angular/core';
import {User} from "../../classes/user";
import {LoginService} from "../services/login.service";
import {NgToastService} from "ng-angular-popup";
import {Router} from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 newUser: User = new User();

  constructor(private loginService: LoginService, private toast: NgToastService, private router: Router) {

  }

  async sendToApi() {
    this.loginService.signup(this.newUser).subscribe({
      next: (resultat) => {
        if(resultat !== null){
          this.router.navigateByUrl('/user/login')
          this.success("Vous avez bien été enregistré !")
        }
      },
      error: (error) => {
        this.router.navigateByUrl('user/register')
        this.error("Une erreur est survenue lors de l'enregistrement.")
        console.log(error)
      }
    });
  }
  success(message: string){
    this.toast.success({ detail: "Succès", summary: message, duration: 5000})
  }
  error(message: string) {
    this.toast.error({ detail: "Erreur", summary: message, duration: 5000})
  }
}
