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
  on(TodosActions.addTodo, (state, {addedTodo}) => {
    return {
      ...state,
      todos: [
        ...state.todos,
        addedTodo
      ]
    };
  }),
  on(TodosActions.changeTodo, (state, {changedTodo}) => {
    const newState = {
      ...state,
      todos: [
        ...state.todos
      ]
    };

    const idx = newState.todos.findIndex((t) => t.id === changedTodo.id);
    newState.todos[idx] = changedTodo;

    return newState;
  })
);

export function reducer(state: TodosState | undefined, action: Action) {
  return todosReducer(state, action);
}
