import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskComponent } from './task.component';
import { TASK_ROUTES } from './task.routing';

const routes: Routes = [
  {path: '', component: TaskComponent, children: TASK_ROUTES},
  {path: 'add', component: AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
