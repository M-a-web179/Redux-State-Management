import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { rootReducer, type RootState } from './reducers';

export const store = createStore(rootReducer, undefined, applyMiddleware(logger));

export type AppDispatch = typeof store.dispatch;
export type { RootState };
