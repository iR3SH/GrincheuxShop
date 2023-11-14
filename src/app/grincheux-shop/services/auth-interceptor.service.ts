import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor  {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Récupération du token d'authentification (à remplacer par votre code)
    const token = localStorage.getItem('token');
    if(!!token) {
      // Ajout du token dans les entêtes de la requête
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      // Envoi de la requête avec les nouvelles entêtes
      return next.handle(authReq);
    }
    else{
      return next.handle(request);
    }
  }
  constructor() { }
}
