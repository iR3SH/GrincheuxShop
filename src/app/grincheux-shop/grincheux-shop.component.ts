import { Component } from '@angular/core';
import {faRegistered, faUser} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {LoginService} from "./users/services/login.service";

@Component({
  selector: 'app-grincheux-shop',
  templateUrl: './grincheux-shop.component.html',
  styleUrl: './grincheux-shop.component.scss'
})
export class GrincheuxShopComponent {
  title = "The Grincheux Shop"
  currentUser : any;
  userDidChangedSubscription = this.loginService.userDidChanged.subscribe({
    next: () => {
      this.loadCurrentUser();
    }
  })
  constructor(private router : Router, public loginService : LoginService) {

  }
  ngOnInit(): void {
    this.loadCurrentUser();
  }

  ngOnDestroy(): void {
    this.userDidChangedSubscription?.unsubscribe();
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/user/login');
  }

  private loadCurrentUser() {
    this.loginService.me().subscribe({
      next: (currentUser) => {
        this.currentUser = currentUser;
      }
    });
  }

  redirectLogin() {
    this.router.navigateByUrl('/user/login')
  }
  redirectRegister() {
    this.router.navigateByUrl('/user/register')
  }

  redirectHome() {
    this.router.navigateByUrl('/')
  }

  redirectProfile() {
    this.router.navigateByUrl('/user/profile')
  }
}
