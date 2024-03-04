import { createReducer, on } from '@ngrx/store';
import * as AppActions from './actions';
import { Todo } from '../models/todo-models';

export interface AppState {
  todosList: Todo[];
}

export const initialState: AppState = {
  todosList: [],
};

export const appReducer = createReducer(
  initialState,

  on(AppActions.addTodo, (state, { text }) => {
    console.log(text)
    const newTodo: Todo = { text: text, status: 'pending' };
    return { ...state, todosList: [...state.todosList, newTodo] };
  }),

  on(AppActions.deleteTodo, (state, { text }) => {
    return {
      ...state,
      todosList: state.todosList.filter((todo) => todo.text != text),
    };
  }),

  on(AppActions.updateTodoStatus, (state, { text, status }) => {
    return {
      ...state,
      todosList: state.todosList.map((todo) => {
        if (todo.text == text) {
          todo.status = status;
        }
        return todo
      }),
    };
  })
);
