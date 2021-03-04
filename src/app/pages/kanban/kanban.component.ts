import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { SharedTaskDataServiceService } from 'src/app/store/shared-task-data-service.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.sass']
})
export class KanbanComponent implements OnInit {
  subscription: Subscription = null;

  constructor(
    private router: Router,
    private sharedData: SharedTaskDataServiceService,
  ) { }

  ngOnInit(): void {
    this.sharedData.loadUsers();
    this.sharedData.updateTaskList();

    const timer = interval(30000);
    this.subscription = timer.subscribe(() => {
      this.sharedData.updateTaskList();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToAdd() {
    this.router.navigate(['/kanban/add']);
  }

  getTaskDetails() {
    return this.sharedData.taskDetail;
  }

  setTaskDetails() {
    this.sharedData.taskDetail=null;
  }
}
