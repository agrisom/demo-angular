import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private path = '/users/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(this.path);
  }
}
