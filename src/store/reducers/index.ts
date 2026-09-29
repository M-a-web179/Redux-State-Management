import { combineReducers } from 'redux';
import { counterReducer, type CounterState } from './counterReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = {
  counter: CounterState;
};