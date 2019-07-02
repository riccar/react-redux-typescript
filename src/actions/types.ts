import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

/**
 * Create a type alias to add all the action creators interfaces asn a Union type
 * By doing this, the reducer is de-cluttered from having all the possible actions types
 * annotated in the same line.
 *
 * In addition, in conjunction with the union above, Typescript provides a type guard
 * that knows on every reducer switch statement what type from the Union it
 * should refers to.
 */
export type Action = FetchTodosAction | DeleteTodoAction;
