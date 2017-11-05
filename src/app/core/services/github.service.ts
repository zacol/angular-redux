import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class GitHubService {
  private API_PATH = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getRepositories(login: string): Observable<any> {
    return this.http.get(`${this.API_PATH}/repositories?since=1`);
  }

  getUsers(login: string): Observable<any> {
    return this.http.get(`${this.API_PATH}/users?since=1`);
  }
}
