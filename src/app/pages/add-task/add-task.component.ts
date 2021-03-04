import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    name: '',
    dateFrom: new Date(),
    dateTo: new Date(),
    status: '',
    description: ''
  });

  constructor(
    private location: Location,
    private formBuilder: FormBuilder, 
    private taskService: TaskService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const taskForm = this.checkoutForm.value;
    this.taskService.save(
      {
        name: taskForm.name,
        datefrom: new Date(taskForm.dateFrom).getDate() + "/" + new Date(taskForm.dateFrom).getMonth() + "/" + new Date(taskForm.dateFrom).getFullYear(),
        dateto: new Date(taskForm.dateTo).getDate() + "/" + new Date(taskForm.dateTo).getMonth() + "/" + new Date(taskForm.dateTo).getFullYear(),
        status: taskForm.status,
        description: taskForm.description,
        users: []
      }
    ).subscribe(() => this.location.back());
  }

  back() {
    this.location.back();
  }
}
