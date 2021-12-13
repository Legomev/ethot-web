import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackconfigurationService } from './backconfiguration.service';
import { CredentialsModel } from '../models/credentials.model';
import { from, Observable } from 'rxjs';
import { TokenModel } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private backConfiguration : BackconfigurationService ) { }

  public login(credentials: CredentialsModel): Observable<TokenModel> {
    let url = this.backConfiguration.getBaseUrl() + '/login';
    return this.http.post<TokenModel>(url, credentials);
  }
}
