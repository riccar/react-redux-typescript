import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

/**
 * StoreState interface describes the entire app store
 */
export interface StoreState {
  todos: Todo[];
}

/**
 * Note, as opposed to regular interface usage where Typescript
 * uses the interface to check that every property is of the right type,
 * in this particular case, it actually checks that the value returned by every
 * reducer within the combine reducer matches their type
 * defined in the interface
 */
export const reducers = combineReducers<StoreState>({
  todos: todosReducer
});
