import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedTaskDataServiceService } from 'src/app/store/shared-task-data-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  
  constructor(
    private router: Router,
    private sharedData: SharedTaskDataServiceService,
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

  setfilterName(value) {
    this.sharedData.filter = {
      name: value
    };
  }

  getFilterName() {
    if(this.sharedData.filter && this.sharedData.filter.name && this.sharedData.filter.name.length) {
      return this.sharedData.filter.name;
    }
    return null;
  }
}
