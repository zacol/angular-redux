import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromUsers from '../reducers/users.reducer';
import * as users from '../actions/users.actions';

import { User } from '../models/users.models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Users</h1>
    <a routerLink="/repositories">See repositories</a>
    <div>
      {{ users$ | async | json }}
    </div>
  `,
})
export class UsersPageComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private store: Store<fromUsers.State>) {
    this.users$ = store.select(fromUsers.selectUsersData);
  }

  ngOnInit() {
    this.store.dispatch(new users.GetUsersRequestAction(1));
  }
}
