import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() productView : ProductModel = {}; 
  private defaultImage = "/assets/imgs/default.jpg";
  public imageUrl = '';
  constructor() { }

  ngOnInit(): void {
    this.imageUrl = "/assets/imgs/" + this.productView.id + ".jpg" ;

  }

  public onError(): void {
    this.imageUrl = this.defaultImage;
  }
}
