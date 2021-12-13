import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BackconfigurationService } from './backconfiguration.service';
import { from, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { TokenModel } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private backConfiguration : BackconfigurationService, private localStorageService : LocalStorageService ) { }

  public getAll(): Observable<ProductModel[]>{
    let url = this.backConfiguration.getBaseUrl() + '/products';
    let token: TokenModel = this.localStorageService.GetToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.token}`
    })
    return this.http.get<ProductModel[]>(url, { headers: headers });
  }
}
