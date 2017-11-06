import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { GitHubService } from '../../core/services/github.service';

import * as users from '../actions/users.actions';

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
export class UsersEffects {
  @Effect()
  getUsers$: Observable<Action> = this.actions$
    .ofType(users.ActionTypes.GET_USERS_REQUEST)
    .map((action: users.GetUsersRequestAction) => action.payload)
    .switchMap(payload => {
      return this.gitHubService.getUsers(payload)
        .map(response => new users.GetUsersSuccessAction(response))
        .catch(error => of(new users.GetUsersErrorAction(error)));
    });

  constructor(
    private actions$: Actions,
    private gitHubService: GitHubService,
  ) {}
}
