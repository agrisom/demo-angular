import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'task-detail-modal',
  template: `
    <div class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__dialog">
        <div>
          <h2>{{task.name}}</h2>
          <p>{{task.description || 'loremIpsum' | translate}}</p>
        </div>
        <div class="modal_actions">
          <button class="modal__close" (click)="close()">{{'modal.closeButton' | translate}}</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./task-detail-modal.component.sass']
})
export class TaskDetailModalComponent implements OnInit {
  @Input() task;
  @Output('cerrarModal') emitirClose = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.emitirClose.emit();
  }

}
