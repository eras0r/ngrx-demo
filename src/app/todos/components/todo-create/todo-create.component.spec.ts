import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoCreateComponent} from './todo-create.component';
import {Store, StoreModule} from '@ngrx/store';
import {TodosState} from '../../todos.reducer';
import {SharedModule} from '../../../shared/shared.module';

describe('TodoCreateComponent', () => {
  let component: TodoCreateComponent;
  let fixture: ComponentFixture<TodoCreateComponent>;
  let store: Store<TodosState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        SharedModule
      ],
      declarations: [TodoCreateComponent]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreateComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<TodosState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
