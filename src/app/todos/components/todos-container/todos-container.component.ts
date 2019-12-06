import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {TodosState} from '../../todos.reducer';
import {Observable} from 'rxjs';
import {Todo} from '../../todos.model';
import {selectTodos} from '../../todos.selectors';
import {changeTodo, removeCompletedTodos} from '../../todos.actions';

@Component({
    selector: 'app-todos-container',
    templateUrl: './todos-container.component.html',
    styleUrls: ['./todos-container.component.css']
})
export class TodosContainerComponent implements OnInit {

    todos$: Observable<Todo[]>;

    constructor(private store: Store<TodosState>) {
    }

    ngOnInit() {
        this.todos$ = this.store.pipe(select(selectTodos));
    }

    changeTodo(todo: Todo): void {
        this.store.dispatch(changeTodo({changedTodo: todo}));
    }

  removeCompleted(): void {
    this.store.dispatch(removeCompletedTodos());
  }

}
