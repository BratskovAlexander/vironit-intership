import { createStore, Store, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/RootReducer';
import logger from 'redux-logger';

export const store: Store = createStore(rootReducer, applyMiddleware(logger));