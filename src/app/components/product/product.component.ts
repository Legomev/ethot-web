import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() productView : ProductModel = {}; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
