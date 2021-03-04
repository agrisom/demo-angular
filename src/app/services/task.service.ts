import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private path = '/tasks/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Task[]>(this.path);
  }

  getById(id) {
    return this.http.get<Task>(this.path + id);
  }

  update(task: Task) {
    return this.http.put(this.path + task.id, task);
  }

  save(task: Task) {
    return this.http.post(this.path, task);
  }
}
