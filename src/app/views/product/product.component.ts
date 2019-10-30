import { ProductDataService } from './product.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'product',
	templateUrl: 'product.component.html'
})

export class ProductComponent implements OnInit {

  constructor(public productService: ProductDataService){}

  ngOnInit() { }

  fetchProducts() {
    this.productService.loadProducts();
  }
}
