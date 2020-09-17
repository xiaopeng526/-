import {combineReducers} from "redux";
import counterReducer from './counter.js';
import userReducer from './user.js';
import cartReducer from './cart.js';
import homeReducer from './home.js';

let reducers=combineReducers({
    counter:counterReducer,
    user:userReducer,
    cart:cartReducer,
    home:homeReducer
})
export default reducers;
