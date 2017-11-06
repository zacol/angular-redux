import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { GitHubService } from '../../core/services/github.service';

import * as repositories from '../actions/repositories.actions';

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class RepositoriesEffects {
  @Effect()
  getRepositories$: Observable<Action> = this.actions$
    .ofType(repositories.ActionTypes.GET_REPOSITORIES_REQUEST)
    .map((action: repositories.GetRepositoriesRequestAction) => action.payload)
    .switchMap(payload => {
      return this.gitHubService.getRepositories(payload)
        .map(response => new repositories.GetRepositoriesSuccessAction(response))
        .catch(error => of(new repositories.GetRepositoriesErrorAction(error)));
    });

  constructor(
    private actions$: Actions,
    private gitHubService: GitHubService,
  ) {}
}
