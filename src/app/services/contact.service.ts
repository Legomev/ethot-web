import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { BackconfigurationService } from './backconfiguration.service';
import { ContactInfoModel } from '../models/contactinfo.model';
import { ContactResponseModel } from '../models/contactResponse.model';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient, private backConfiguration : BackconfigurationService ) { }

  public sendEmail(contactInfo : ContactInfoModel ){
    let url = this.backConfiguration.getBaseUrl() + "/contact";
   
    this.http.post<ContactResponseModel>(url, contactInfo).subscribe(
      (data: ContactResponseModel) => console.log(data)
    );
  }
}
