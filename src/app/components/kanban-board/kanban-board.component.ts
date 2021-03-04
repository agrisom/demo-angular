import { Component, OnInit } from '@angular/core';
import { SharedTaskDataServiceService } from 'src/app/store/shared-task-data-service.service';

@Component({
  selector: 'kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.sass']
})
export class KanbanBoardComponent implements OnInit {

  constructor(
    private sharedData: SharedTaskDataServiceService
  ) { }

  ngOnInit(): void {
  }

  getUsersNames(users) {
    return users
      .map(id => this.sharedData.users.find(user => user.id == id).name)
      .join(', ');
  }

  changeStatus(task) {
    task.status = task.status == 'doing' ? 'done' : task.status == 'done' ? 'to do' : 'doing';
    this.sharedData.update(task);
  }

  openDetails(task) {
    this.sharedData.taskDetail = task;
  }

  filterTaskByStatus(status) {
    return this.sharedData.tasks.filter(task => {
        return task.status == status
    });
  }
}
