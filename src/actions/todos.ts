import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

/**
 * Create interface to describe the intended types
 * the action creator should return via dispatch function
 */
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number; //id of deleted todo
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  //Annotate the dispatch function parameter
  return async (dispatch: Dispatch) => {
    //annotate the axios.get generic
    const response = await axios.get<Todo[]>(url);
    //Annotate the dispatch generic
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  };
};

/***
 * Example of a typical non async action creator that dispatches automatically
 * Annotate parameters and return type
 */
export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  };
};
