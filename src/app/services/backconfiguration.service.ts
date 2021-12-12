import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackconfigurationService {

  BASEURL = 'http://localhost:3000'
  constructor() { }

  public getBaseUrl() {
    return this.BASEURL;
  }
}
