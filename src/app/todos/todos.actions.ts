import {createAction, props} from '@ngrx/store';
import {Todo} from './todos.model';

export const loadTodos = createAction(
  '[Todos] Load Todos'
);

export const loadTodosSuccess = createAction(
  '[Todos] Load Todos Success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todos] Load Todos Failure',
  props<{ error: any }>()
);

export const addTodo = createAction(
  '[Todos] Add Todo',
  props<{ addedTodo: Todo }>()
);
