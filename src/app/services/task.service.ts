import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private path = '/tasks/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.path);
  }

  getById(id) {
    return this.http.get(this.path + id);
  }

  update(task) {
    return this.http.put(this.path, task);
  }

  save(task) {
    return this.http.post(this.path, task);
  }
}
