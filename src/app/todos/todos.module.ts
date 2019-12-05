import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodosContainerComponent} from './components/todos-container/todos-container.component';
import {TodosRoutingModule} from './todos-routing.module';
import {EffectsModule} from '@ngrx/effects';
import {TodosEffects} from './todos.effects';
import {TodosListComponent} from './components/todos-list/todos-list.component';
import {StoreModule} from '@ngrx/store';
import {reducer, todosFeatureKey} from './todos.reducer';
import {TodosListEntryComponent} from './components/todos-list-entry/todos-list-entry.component';
import {SharedModule} from '../shared/shared.module';
import {TodoCreateComponent} from './components/todo-create/todo-create.component';


@NgModule({
  declarations: [
    TodosContainerComponent,
    TodosListComponent,
    TodosListEntryComponent,
    TodoCreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TodosRoutingModule,
    StoreModule.forFeature(todosFeatureKey, reducer),
    EffectsModule.forFeature([TodosEffects])
  ]
})
export class TodosModule {
}
