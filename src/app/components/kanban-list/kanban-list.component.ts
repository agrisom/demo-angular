import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedTaskDataServiceService } from 'src/app/store/shared-task-data-service.service';

@Component({
  selector: 'kanban-list',
  templateUrl: './kanban-list.component.html',
  styleUrls: ['./kanban-list.component.sass']
})
export class KanbanListComponent implements OnInit {
  filterName: string = '';

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

  formatDate(dateString) {
    const dateParts = dateString.split("/");
    return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  }

  tasksFiltered() {
    if(this.filterName && this.filterName.length) {
      const condition = this.filterName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return this.sharedData.tasks.filter(task => {
        return task.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(condition) != -1
      })
    } else {
      return this.sharedData.tasks;
    }
  }
}
