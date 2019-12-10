import {Action, createReducer} from '@ngrx/store';
import * as TodosActions from './todos.actions';
import {Todo} from './todos.model';
import {mutableOn} from '../core/mutable-on';

export const todosFeatureKey = 'todos';

export interface TodosState {
  todos: Todo[];
}

export const initialState: TodosState = {
  todos: []
};

const todosReducer = createReducer<TodosState>(
  initialState,

  mutableOn(TodosActions.loadTodosSuccess, (state, {todos}) => {
    state.todos = todos;
  }),
  mutableOn(TodosActions.addTodo, (state, {addedTodo}) => {
    state.todos.push(addedTodo);
  }),
  mutableOn(TodosActions.changeTodo, (state, {changedTodo}) => {
    const idx = state.todos.findIndex((t) => t.id === changedTodo.id);
    if (idx > -1) {
      state.todos[idx] = changedTodo;
    }
  }),
  mutableOn(TodosActions.removeCompletedTodos, (state) => {
    state.todos = state.todos.filter((t) => !t.done);
  })
);

export function reducer(state: TodosState | undefined, action: Action) {
  return todosReducer(state, action);
}
