import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';
import {environment} from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })

export class UserService {

  private localServer: string = environment.localServer;
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`/users`);
  }

  getById(id: number) {
    return this.http.get(`/users/` + id);
  }

  register(user: User) {
    console.log(user);
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization'
      })
    };

    return this.http.post(`${this.localServer}/users/register`, JSON.stringify(user), httpOptions);
  }

  update(user: User) {
    return this.http.put(`/users/` + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(`/users/` + id);
  }
}
