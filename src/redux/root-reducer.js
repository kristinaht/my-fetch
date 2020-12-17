import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //gives us the localStorage object on the window browser.

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory-reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'root', //tells at what point within reducer object we want to start storing everything
  storage,
  whitelist: ['cart'] //reducers I want to persist
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer);