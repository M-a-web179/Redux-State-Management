import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { rootReducer, type RootState } from './reducers';

const logger = createLogger();

export const store = createStore(rootReducer, undefined, applyMiddleware(logger));

export type AppDispatch = typeof store.dispatch;
export type { RootState };
