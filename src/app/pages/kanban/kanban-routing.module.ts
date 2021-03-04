import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from '../add-task/add-task.component';
import { KanbanComponent } from './kanban.component';
import { TASK_ROUTES } from './kanban.routing';

const routes: Routes = [
  {path: '', component: KanbanComponent, children: TASK_ROUTES},
  {path: 'add', component: AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KanbanRoutingModule { }
