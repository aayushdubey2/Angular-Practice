import { createAction, props } from '@ngrx/store';

export const updateTodoStatus = createAction(
    '[Todo] Update Status',
    props<{ text: string; status: string }>()
);

export const addTodo = createAction(
    '[Todo] Add',
    props<{ text: string}>()
);

export const deleteTodo = createAction(
    '[Todo] Add',
    props<{ text: string}>()
);
