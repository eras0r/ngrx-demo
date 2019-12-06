import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosListEntryComponent} from './todos-list-entry.component';
import {SharedModule} from '../../../shared/shared.module';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Todo} from '../../todos.model';

@Component({
  selector: 'app-todos-list-entry-test',
  template: '<app-todos-list-entry [todo]="todo"></app-todos-list-entry>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestTodosListEntryComponent {
  todo = new Todo('1', 'do it');
}

describe('TodosListEntryComponent', () => {
  let component: TestTodosListEntryComponent;
  let fixture: ComponentFixture<TestTodosListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [
        TodosListEntryComponent,
        TestTodosListEntryComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTodosListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
