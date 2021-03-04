import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private path = '/users/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.path);
  }
}
