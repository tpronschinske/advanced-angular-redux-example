import { DataService } from '../../service/data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store/store';
import { ProductAction } from './actions';

@Injectable()
export class ProductDataService extends DataService {

  constructor(private _http: HttpClient, private ngRedux: NgRedux<IAppState>){
    super(_http);
  }

  loadProducts(){
    this.getRequest('/product').subscribe((result: any) => {
      this.ngRedux.dispatch({ type: ProductAction.FetchProductSuccess, products: result.data })
    });
  }

}
