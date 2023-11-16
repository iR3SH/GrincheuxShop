import { Injectable } from '@angular/core';
import {BaseApiService} from "../../classes/base-api-service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShopService extends BaseApiService {

  constructor(httpClient: HttpClient) {
    super(httpClient, '')
  }
}
