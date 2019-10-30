import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store/store';

@Component({
	selector: 'app-product-display',
	templateUrl: 'display.component.html'
})

export class DisplayComponent implements OnInit {

  @select(s => s.product.products) products;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

	ngOnInit() { }
}
