import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.sass']
})
export class KanbanCardComponent implements OnInit {
  @Input() task;
  @Input() users;
  @Output('showDetail') emitDetail = new EventEmitter<Task>();
  @Output('changeStatus') emitMove = new EventEmitter<Task>();
  
  constructor() { }

  ngOnInit(): void {
  }

  showDetail() {
    this.emitDetail.emit(this.task);
  }

  changeStatus() {
    this.emitMove.emit(this.task);
  }
}
