import { combineReducers } from 'redux';
import { IProductState, PRODUCT_INITIAL_STATE, productReducer } from '../views/product/store';


export interface IAppState {
  product: IProductState;
}

export const INITIAL_STATE: IAppState = {
  product: PRODUCT_INITIAL_STATE,
}

export const rootReducer = combineReducers({
  product: productReducer
});
