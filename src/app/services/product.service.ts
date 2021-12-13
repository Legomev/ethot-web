import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { BackconfigurationService } from './backconfiguration.service';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private backConfiguration : BackconfigurationService ) { }

  public getAll(): Observable<ProductModel[]>{
    let url = this.backConfiguration.getBaseUrl() + '/products';
    return this.http.get<ProductModel[]>(url);
  }
}
