import { createStore } from 'redux';
import { rootReducer } from '../reducers/RootReducer';

export const store: any = createStore(rootReducer);