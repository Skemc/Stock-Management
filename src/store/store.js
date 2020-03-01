import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Items from '../reducers'

const initialState = {};

const middleware = [thunk];

const store = createStore(
    Items, 
    initialState, 
    applyMiddleware(...middleware));

export default store;