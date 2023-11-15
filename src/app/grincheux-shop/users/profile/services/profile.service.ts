import { Injectable } from '@angular/core';
import {BaseApiService} from "../../../classes/base-api-service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseApiService{
  private user : any;
  constructor(httpClient: HttpClient) {
    super(httpClient, '');
  }

  changeInfos(user: any): Observable<any> {
    return this.patch('api/user',user)
  }
  getAddresses(): Observable<any> {
    return this.get('api/mailingaddress/')
  }

  updateAddress(selectedAddress: any) : Observable<any> {
    return this.patch('api/mailingaddress', selectedAddress)
  }
}
