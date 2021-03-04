import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {path: '', redirectTo: 'kanban', pathMatch: 'full'},
  {path: 'list', loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule)},
  {path: 'board', loadChildren: () => import('./pages/board/board.module').then(m => m.BoardModule)},
  {path: 'other', loadChildren: () => import('./pages/other/other.module').then(m => m.OtherModule)},
  {path: 'kanban', loadChildren: () => import('./pages/kanban/kanban.module').then(m => m.KanbanModule)},
  {path: 'test', component: TestComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
