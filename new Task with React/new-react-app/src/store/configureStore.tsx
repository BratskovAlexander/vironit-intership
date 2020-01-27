import { createStore, Store, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/RootReducer';
import logger from 'redux-logger';
import mySaga from '../middleware/sagaMiddleware';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store: Store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(mySaga)