import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { SharedTaskDataServiceService } from 'src/app/store/shared-task-data-service.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {

  constructor(
    private router: Router,
    private sharedData: SharedTaskDataServiceService
  ) { }

  ngOnInit(): void {
    this.sharedData.loadUsers();
    this.sharedData.updateTaskList();
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
