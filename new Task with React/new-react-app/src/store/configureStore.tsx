import { createStore, Store, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/RootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store: Store = createStore(rootReducer, applyMiddleware(thunk, logger));