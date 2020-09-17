import {combineReducers} from "redux";
import adminReducer from './admin.js';

let reducers=combineReducers({
    admin:adminReducer
})
export default reducers;
