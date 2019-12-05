import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodosContainerComponent} from './components/todos-container/todos-container.component';
import {TodosRoutingModule} from './todos-routing.module';
import {EffectsModule} from '@ngrx/effects';
import {TodosEffects} from './todos.effects';
import {TodosListComponent} from './components/todos-list/todos-list.component';
import {StoreModule} from '@ngrx/store';
import {reducer, todosFeatureKey} from './todos.reducer';


@NgModule({
  declarations: [TodosContainerComponent, TodosListComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    StoreModule.forFeature(todosFeatureKey, reducer),
    EffectsModule.forFeature([TodosEffects])
  ]
})
export class TodosModule {
}
