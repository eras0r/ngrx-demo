import {v4 as uuid} from 'uuid';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TodosState} from '../../todos.reducer';
import {Todo} from '../../todos.model';
import {addTodo} from '../../todos.actions';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCreateComponent implements OnInit {

  name = '';

  constructor(private store: Store<TodosState>) {
  }

  ngOnInit() {
  }

  addNewTodo(): void {
    // TODO use proper form validation?
    if (this.name) {
      const todo = new Todo(uuid(), this.name);
      this.store.dispatch(addTodo({addedTodo: todo}));
    }
  }

}
