import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRepositories from '../reducers/repositories.reducer';
import * as repositories from '../actions/repositories.actions';

import { Repository } from '../models/repositories.models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Repositories</h1>
    <a routerLink="/users">See users</a>
    <div>
      <pre>{{ repositories$ | async | json }}</pre>
    </div>
  `,
})
export class RepositoriesPageComponent implements OnInit {
  repositories$: Observable<Repository[]>;

  constructor(private store: Store<fromRepositories.State>) {
    this.repositories$ = store.select(fromRepositories.selectRepositoriesData);
  }

  ngOnInit() {
    this.store.dispatch(new repositories.GetRepositoriesRequestAction(1));
  }
}
