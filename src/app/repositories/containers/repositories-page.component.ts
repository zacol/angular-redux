import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRepositories from '../reducers/repositories.reducer';
import * as repositories from '../actions/repositories.actions';

import { Repository } from '../models/repositories.models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './repositories-pages.component.html',
})
export class RepositoriesPageComponent implements OnInit {
  repositoriesData$: Observable<Repository[]>;
  repositoriesIsFetching$: Observable<boolean>;

  constructor(private store: Store<fromRepositories.State>) {
    this.repositoriesData$ = store.select(fromRepositories.selectRepositoriesData);
    this.repositoriesIsFetching$ = store.select(fromRepositories.selectRepositoriesIsFetching);
  }

  ngOnInit() {
    this.store.dispatch(new repositories.GetRepositoriesRequestAction(1));
  }
}
