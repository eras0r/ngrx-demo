import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodosContainerComponent} from './components/todos-container/todos-container.component';
import {TodosRoutingModule} from './todos-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './todos.effects';


@NgModule({
  declarations: [TodosContainerComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    EffectsModule.forFeature([TodosEffects])
  ]
})
export class TodosModule {
}
