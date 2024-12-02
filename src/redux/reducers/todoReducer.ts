import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/actionTypes/todoActionTypes';
import { AddTodoAction, RemoveTodoAction, ToggleTodoAction } from '../actions/actionCreators/todoActionCreator';

interface Todo {
  text: string;
  completed: boolean;
}

interface State {
  todos: Todo[];
}

type Action = AddTodoAction | RemoveTodoAction | ToggleTodoAction;

const initialState: State = {
  todos: [],
};

const todoReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;