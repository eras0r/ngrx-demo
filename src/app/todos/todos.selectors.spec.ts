import * as fromTodos from './todos.reducer';
import {selectTodosState} from './todos.selectors';

describe('Todos Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTodosState({
      [fromTodos.todosFeatureKey]: {
        todos: []
      }
    });

    console.log('result: ', result);
    expect(result).toEqual({todos: []});
  });
});
