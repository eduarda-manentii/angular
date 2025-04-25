import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './constants/user';
import { Post } from './constants/post';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private apiPost = 'https://jsonplaceholder.typicode.com/posts';
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  postUser(post: any): Observable<Post> {
    return this.http.post<any>(this.apiPost, post);
  }

}

