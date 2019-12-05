import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosContainerComponent} from './todos-container.component';
import {Store, StoreModule} from '@ngrx/store';
import {TodoCreateComponent} from '../todo-create/todo-create.component';
import {SharedModule} from '../../../shared/shared.module';
import {TodosListComponent} from '../todos-list/todos-list.component';
import {TodosListEntryComponent} from '../todos-list-entry/todos-list-entry.component';
import {provideMockStore} from '@ngrx/store/testing';
import {TodosState} from '../../todos.reducer';

describe('TodosContainerComponent', () => {
  let component: TodosContainerComponent;
  let fixture: ComponentFixture<TodosContainerComponent>;
  let store: Store<TodosState>;
  const initialState = {todos: []};

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        SharedModule
      ],
      declarations: [
        TodosContainerComponent,
        TodoCreateComponent,
        TodosListComponent,
        TodosListEntryComponent
      ],
      providers: [
        provideMockStore({
          initialState
        })
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<any>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
