import { combineReducers, createStore } from 'redux';
import { ageReducer } from './agereducer';

const rootReducer = combineReducers({
    age : ageReducer,
  })

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);