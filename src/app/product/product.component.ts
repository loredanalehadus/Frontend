import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  product: Product;

  ngOnInit() { }

  goBack() {
    window.history.back();
  }
}