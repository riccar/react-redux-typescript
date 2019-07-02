import { Todo, Action, ActionTypes } from '../actions';

/**
 * By creating the action types enum and the action Union types, Typescript
 * provides a type guard that knows on every reducer switch statement
 * what type from the Union it should refers to.
 */
export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};
