import {combineReducers} from 'redux';
import token from './token'
import UIstate from './uiReducer'
import {createStore} from 'redux'
let root = combineReducers({token,UIstate})
let store = createStore(root);
export default store