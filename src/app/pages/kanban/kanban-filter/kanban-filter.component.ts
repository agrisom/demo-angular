import { Component, OnInit } from '@angular/core';
import { SharedTaskDataServiceService } from 'src/app/store/shared-task-data-service.service';

@Component({
  selector: 'kanban-filter',
  templateUrl: './kanban-filter.component.html',
  styleUrls: ['./kanban-filter.component.sass']
})
export class KanbanFilterComponent implements OnInit {
  
  constructor(private sharedTaskData: SharedTaskDataServiceService) { }

  ngOnInit(): void {
  }

  setfilterName(value) {
    console.log("change");
    this.sharedTaskData.filter = {
      name: value
    };
  }

  getFilterName() {
    if(this.sharedTaskData.filter && this.sharedTaskData.filter.name && this.sharedTaskData.filter.name.length) {
      return this.sharedTaskData.filter.name;
    }
    return null;
  }

}
