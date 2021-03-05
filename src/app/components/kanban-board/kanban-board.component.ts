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

  getGroups() {
    return this.sharedData.getGroups();
  }

  getColor(group) {
    return Number.isInteger(group) ? '' : '__' + group.replace(' ', '');
  }

  getUsersNames(users) {
    return users
      .map(id => this.sharedData.users.find(user => user.id == id).name)
      .join(', ');
  }

  getGroupName(group) {
    return group.length == 0 ? 'unasigned': group.length > 1 ? group : this.sharedData.users.find(user => user.id == group).name;
  }

  changeStatus(task) {
    task.status = task.status == 'doing' ? 'done' : task.status == 'done' ? 'to do' : 'doing';
    this.sharedData.update(task);
  }

  openDetails(task) {
    this.sharedData.taskDetail = task;
  }

  filterTaskGroup(group: string) {
    const tasks = this.sharedData.getTasks().filter(task => {
      if(this.sharedData.filter && this.sharedData.filter.groupBy && this.sharedData.filter.groupBy == 'user') {
        return Number.isInteger(group) ? task.users.includes(group) : task.users.length == 0;
      } else {
        return task.status == group;
      }
    });
    return tasks;
  }
}
