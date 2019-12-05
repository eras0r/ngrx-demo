import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../todos.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todos-list-entry',
  templateUrl: './todos-list-entry.component.html',
  styleUrls: ['./todos-list-entry.component.css']
})
export class TodosListEntryComponent implements OnInit {

  @Input()
  todo: Todo;

  @Output()
  todoChanged = new EventEmitter<Todo>();

  editing = false;

  todoFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.todoFormGroup = this.fb.group(this.todo);
  }

  toggleTodo(): void {
    this.todoChanged.emit(this.getTodo());
  }

  toggleEditing(): void {
    this.editing = !this.editing;
  }

  updateText(): void {
    this.toggleEditing();
    this.todoChanged.emit(this.getTodo());
  }

  /**
   * gets the current todo from the form.
   */
  private getTodo(): Todo {
    return this.todoFormGroup.value;
  }

}
