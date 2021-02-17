import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import ingresarReducer from './reducers/ingresarReducer';
import productReducer from './reducers/productReducer';
import shoppingListReducer from './reducers/shoppingListReducer';
import userReducer from './reducers/userReducer';
import historyReducer from './reducers/historyReducer';

const rootReducer = combineReducers({
  log: ingresarReducer,
  products: productReducer,
  shopping: shoppingListReducer,
  user: userReducer,
  history: historyReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;