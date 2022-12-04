// Create the redux store here and the middleware with the thunks here
import thunk from 'redux-thunk'; 
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore, combineReducers } from 'redux';


// Have my reducers here , and I need to combine them here with the combineReducers function 
import * as allreducers from './allReducers';

const rootReducers = combineReducers(allreducers);
const logger = createLogger({ collapsed: true });
const store = createStore(rootReducers, applyMiddleware(thunk, logger));

export default store;
