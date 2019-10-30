import { tassign } from 'tassign';
import { ProductAction } from './actions';
import { Product } from 'src/app/models/product';

export interface IProductState {
  products: Array<Product>,
  lastUpdated: Date
}

export const PRODUCT_INITIAL_STATE: IProductState = {
  products: [],
  lastUpdated: null
}

function setProductFromServer(state, action) {
  return tassign(state, {
    products: action.products,
    lastUpdated: new Date()
  });
}

export function productReducer(state: IProductState = PRODUCT_INITIAL_STATE, action): IProductState {
  switch (action.type) {
    case ProductAction.FetchProductSuccess: return setProductFromServer(state, action);
  }

  return state;
}
