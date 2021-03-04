import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.sass']
})
export class KanbanComponent implements OnInit {
  users = [];
  tasks = [];
  subscription: Subscription = null;
  modalDetails = null;

  constructor(
    private router: Router,
    private taskService: TaskService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.loadUsers();
    this.updateTaskList();

    const timer = interval(30000);
    this.subscription = timer.subscribe(() => {
      this.updateTaskList();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadUsers() {
    this.userService.getAll().subscribe((users: any[]) => {
      this.users = users;
    });
  }

  updateTaskList() {
    this.taskService.getAll().subscribe((tasks: any[]) => {
      this.tasks = tasks;
      console.log("list updated");
    });
  }

  changeStatus(task) {
    task.status = task.status == 'doing' ? 'done' : task.status == 'done' ? 'to do' : 'doing';
    this.taskService.update(task).subscribe();
  }

  openDetails(task) {
    this.modalDetails = task;
  }
  
  goToAdd() {
    this.router.navigate(['/kanban/add']);
  }

}
