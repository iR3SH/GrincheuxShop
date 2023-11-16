import { Injectable } from '@angular/core';
import {BaseApiService} from "../classes/base-api-service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService extends BaseApiService{

  constructor(httpClient : HttpClient)
  {
    super(httpClient, "")
  }

  getByNameCateg(name : any){
    return this.post('api/search/categories', name);
  }
}
