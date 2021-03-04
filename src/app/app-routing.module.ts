import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {path: '', redirectTo: 'kanban', pathMatch: 'full'},
  {path: 'kanban', loadChildren: () => import('./pages/kanban/kanban.module').then(m => m.KanbanModule)},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
