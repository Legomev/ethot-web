import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackconfigurationService } from './backconfiguration.service';
import { CredentialsModel } from '../models/credentials.model';
import { Subject, Observable } from 'rxjs';
import { TokenModel } from '../models/token.model';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public getLoggedInName = new Subject(); 

  constructor(private http: HttpClient, private backConfiguration : BackconfigurationService, private localStorageService : LocalStorageService  ) { }

  public login(credentials: CredentialsModel): Observable<TokenModel> {
    let url = this.backConfiguration.getBaseUrl() + '/login';
    return this.http.post<TokenModel>(url, credentials);
  }

  public logout(){
    let url = this.backConfiguration.getBaseUrl() + '/logout';
    let token : TokenModel = this.localStorageService.GetToken();
    return this.http.post<TokenModel>(url, token);
  }
}
