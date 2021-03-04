import { Routes } from "@angular/router";
import { KanbanBoardComponent } from "src/app/components/kanban-board/kanban-board.component";
import { KanbanListComponent } from "src/app/components/kanban-list/kanban-list.component";

export const TASK_ROUTES: Routes = [
    {path: '', component: KanbanListComponent},
    {path: 'list', component: KanbanListComponent},
    {path: 'board', component: KanbanBoardComponent}
]