import { combineReducers } from 'redux';
import itemReducer from './reducer';

export default combineReducers({
    Items: itemReducer
});