import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { User } from '../models/user.model';
import { TaskService } from '../services/task.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class SharedTaskDataServiceService {
  users : User[] = [];
  tasks : Task[] = [];
  taskDetail : Task = null;
  filter : {
    name?: string,
    value?: string,
    groupBy?: string,
    orderBy?: string
  };

  constructor(
    private userService: UserService,
    private taskService: TaskService
  ) { }

  update(task) {
    this.taskService.update(task).subscribe();
  }

  loadUsers() {
    this.userService.getAll().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  updateTaskList() {
    this.taskService.getAll().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      console.log("list updated");
    });
  }

  getGroups() {
    if(this.filter && this.filter.groupBy && this.filter.groupBy.length) {
      switch(this.filter.groupBy) {
        case 'user': {
          let array = [''];
          const users = this.tasks.map(task => task.users);
          users.filter(x => x.length).forEach(u => array = array.concat(u));
          
          return [...new Set(array)];
        }
        default: return [...new Set(this.tasks.map(task => task.status))];
      }
    }
    return [...new Set(this.tasks.map(task => task.status))];
  }

  getTasks() {
    if(this.filter && this.filter.value && this.filter.value.length) {
      const condition = this.filter.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return this.tasks.filter(task => {
        return task.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(condition) != -1
      })
    } else {
      return this.tasks;
    }
  }
}
