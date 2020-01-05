import { createStore, Store } from 'redux';
import { rootReducer } from '../reducers/RootReducer';

export const store: Store = createStore(rootReducer);