import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products : ProductModel[] = [ 
    { title : "Producto 1", subtitle : "Sub 1", description : "Loren ipsum 1" },
    { title : "Producto 2", subtitle : "Sub 2", description : "Loren ipsum 2" },
    { title : "Producto 3", subtitle : "Sub 3", description : "Loren ipsum 3" },
    { title : "Producto 4", subtitle : "Sub 4", description : "Loren ipsum 4" },
    { title : "Producto 5", subtitle : "Sub 5", description : "Loren ipsum 5" },
    { title : "Producto 6", subtitle : "Sub 6", description : "Loren ipsum 6" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
