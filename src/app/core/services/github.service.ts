import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class GitHubService {
  private API_PATH = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  /**
   * Repository endpoint
   *
   * @param {number} since Start element
   * @returns {Observable<any>} Returns a list of GitHub repositories
   * @memberof GitHubService
   */
  getRepositories(since: number): Observable<any> {
    return this.http.get(`${this.API_PATH}/repositories?since=${since}`);
  }

  /**
   * Users endpoint
   *
   * @param {number} since Start element
   * @returns {Observable<any>} Returns a list of GitHub users
   * @memberof GitHubService
   */
  getUsers(since: number): Observable<any> {
    return this.http.get(`${this.API_PATH}/users?since=${since}`);
  }
}
