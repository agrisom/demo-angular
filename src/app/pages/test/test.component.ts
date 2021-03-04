import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { SharedTaskDataServiceService } from 'src/app/store/shared-task-data-service.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  todo = 'to do';
  doing = 'doing';
  done = 'done';

  constructor(
    private sharedData: SharedTaskDataServiceService
  ) { }

  ngOnInit(): void {
    this.sharedData.updateTaskList();
  }

  drop(event: CdkDragDrop<string[]>) {
    if(event.container != event.previousContainer) {
      const task : Task = event.item.data;
      task.status = "" + event.container.data;
      this.sharedData.update(task);
    }
  }

  filterTaskByStatus(status) {
    return this.sharedData.getTasks().filter(task => {
        return task.status == status
    });
  }

}
