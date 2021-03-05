import { Component, OnInit } from '@angular/core';
import { SharedTaskDataServiceService } from 'src/app/store/shared-task-data-service.service';

@Component({
  selector: 'task-group',
  template: `
    <select name="group" [ngModel]="groupBy" (ngModelChange)="onChange($event)">
      <option [value]="option" *ngFor="let option of groupOptions">{{option}}</option>
    </select>
  `,
  styles: [
  ]
})
export class TaskGroupComponent implements OnInit {
  groupBy = 'state';
  groupOptions = ['state', 'user'];

  constructor(private sharedTaskData: SharedTaskDataServiceService) { }

  ngOnInit(): void {
    if(this.sharedTaskData.filter && this.sharedTaskData.filter.groupBy && this.sharedTaskData.filter.groupBy.length) {
      this.groupBy = this.sharedTaskData.filter.groupBy;
    }
  }

  onChange(newValue) {
    this.groupBy = newValue;
    if(!this.sharedTaskData.filter) {
      this.sharedTaskData.filter = {}
    }
    this.sharedTaskData.filter.groupBy = newValue
  }
}
