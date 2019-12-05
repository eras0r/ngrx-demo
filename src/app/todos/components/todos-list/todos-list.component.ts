import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../todos.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  @Input()
  todos: Todo [];

  constructor() { }

  ngOnInit() {
  }

}
