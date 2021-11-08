import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://my-user-manager.herokuapp.com/users/"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  getUser(id:string): Observable<any> {
    return this.http.get(this.url + id);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveUser(user: User): Observable<any> {
    return this.http.post(this.url, user);
  }

  editUser(id: string, user: User): Observable<any> {
    return this.http.put(this.url + id, user);
  }

}
