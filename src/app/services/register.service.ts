import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserRegisterModel } from '../models/userregister.model';
import { BackconfigurationService } from './backconfiguration.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private backConfiguration : BackconfigurationService ) { }

  public sendEmail(userRegister : UserRegisterModel ){
    let url = this.backConfiguration.getBaseUrl() + "/users";
   
    this.http.post<UserRegisterModel>(url, userRegister).subscribe(
      (data: UserRegisterModel) => console.log(data)
    );
  }
}
