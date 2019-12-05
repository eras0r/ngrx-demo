import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.css']
})
export class TodosContainerComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}
