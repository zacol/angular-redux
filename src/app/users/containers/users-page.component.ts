import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromUsers from '../reducers/users.reducer';
import * as users from '../actions/users.actions';

import { User } from '../models/users.models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './users-page.component.html',
})
export class UsersPageComponent implements OnInit {
  usersData$: Observable<User[]>;
  usersIsFetching$: Observable<boolean>;

  constructor(private store: Store<fromUsers.State>) {
    this.usersData$ = store.select(fromUsers.selectUsersData);
    this.usersIsFetching$ = store.select(fromUsers.selectUsersIsFetching);
  }

  ngOnInit() {
    this.store.dispatch(new users.GetUsersRequestAction(1));
  }
}
