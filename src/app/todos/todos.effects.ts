import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

import * as TodosActions from './todos.actions';


@Injectable()
export class TodosEffects {

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodosActions.loadTodos),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(todos => TodosActions.loadTodosSuccess({todos})),
          catchError(error => of(TodosActions.loadTodosFailure({error}))))
      )
    );
  });


  constructor(private actions$: Actions) {
  }

}
