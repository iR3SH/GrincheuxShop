import { HttpClient } from "@angular/common/http";
import {environment} from "../../../environnements/environnement";

export class BaseApiService {

  constructor(protected httpClient: HttpClient, public baseUrl: string){
    this.baseUrl = `${environment.domain}${this.baseUrl}`
  }

  get(endpoint: string) {
    return this.httpClient.get(`${this.baseUrl}/${endpoint}`);
  }

  post(endpoint: string, payload: any) {

    return this.httpClient.post(`${this.baseUrl}/${endpoint}`, payload);
  }
  patch(endpoint: string, payload: any) {
    return this.httpClient.patch(`${this.baseUrl}/${endpoint}`, payload);
  }
}
