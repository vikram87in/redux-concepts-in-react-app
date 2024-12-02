import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actionTypes/todoActionTypes';

// Define the types for the payloads
export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: string;
}

export interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: number;
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

// Action to add a new TODO
export const addTodo = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: text,
});

// Action to remove a TODO by index
export const removeTodo = (index: number): RemoveTodoAction => ({
  type: REMOVE_TODO,
  payload: index,
});

// Action to toggle a TODO's completed state
export const toggleTodo = (index: number): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  payload: index,
});