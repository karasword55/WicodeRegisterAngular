import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient ) { }

  public getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/getall`);
  }

  public addUser(user:User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/user/add`,user);
  } 
}
