import { combineReducers } from 'redux';
import categoryReducer from './category.reducer';
import productReducer from './product.reducer';

const combineReducer = combineReducers({
  category: categoryReducer,
  product: productReducer
});

export default combineReducer;