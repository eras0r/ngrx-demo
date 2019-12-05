import {Action, createReducer, on} from '@ngrx/store';
import * as TodosActions from './todos.actions';
import {Todo} from './todos.model';

export const todosFeatureKey = 'todos';

export interface TodosState {
  todos: Todo[];
}

export const initialState: TodosState = {
  todos: []
};

const todosReducer = createReducer(
  initialState,

  on(TodosActions.loadTodos, state => state),
  on(TodosActions.loadTodosSuccess, (state, action) => state),
  on(TodosActions.loadTodosFailure, (state, action) => state),
);

export function reducer(state: TodosState | undefined, action: Action) {
  return todosReducer(state, action);
}
