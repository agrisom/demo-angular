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
    name: string
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

  getTasks() {
    if(this.filter && this.filter.name && this.filter.name.length) {
      const condition = this.filter.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return this.tasks.filter(task => {
        return task.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(condition) != -1
      })
    } else {
      return this.tasks;
    }
  }
}
