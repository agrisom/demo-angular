import { Component, OnInit } from '@angular/core';
import { SharedTaskDataServiceService } from 'src/app/store/shared-task-data-service.service';

@Component({
  selector: 'task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.sass']
})
export class TaskFilterComponent implements OnInit {
  
  constructor(private sharedTaskData: SharedTaskDataServiceService) { }

  ngOnInit(): void {
  }

  setfilterName(value) {
    if(!this.sharedTaskData.filter) {
      this.sharedTaskData.filter = {}
    }
    this.sharedTaskData.filter.name = 'name';
    this.sharedTaskData.filter.value = value
  }

  getFilterName() {
    if(this.sharedTaskData.filter && this.sharedTaskData.filter.value && this.sharedTaskData.filter.value.length) {
      return this.sharedTaskData.filter.value;
    }
    return null;
  }

}
