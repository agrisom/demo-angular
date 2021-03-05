import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path: 'tasks', loadChildren: () => import('./pages/tasks/task.module').then(m => m.TaskModule)},
  {path: 'other', loadChildren: () => import('./pages/other/other.module').then(m => m.OtherModule)},
  {path: 'test', component: TestComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
