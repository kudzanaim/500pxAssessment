import { createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { REDUCER } from "./../reducer/reducer";


// Inital State
const initialState = {
    currentFilter: null,
    currentPage: 0,
    photos:null,
    singlePhoto:null
};


// Middleware
const middleware = [thunk.withExtraArgument({DB:null})];

export const Store = createStore(REDUCER, initialState, applyMiddleware(...middleware));