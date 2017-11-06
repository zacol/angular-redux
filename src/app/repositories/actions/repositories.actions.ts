import { Action } from '@ngrx/store';

import { type } from '../../utils';

import { Repository } from '../models/repositories.models';

const ACTION_PREFIX = '[Repositories]';

export const ActionTypes = {
  GET_REPOSITORIES_REQUEST: type(`${ACTION_PREFIX} Get Repositories Request`),
  GET_REPOSITORIES_SUCCESS: type(`${ACTION_PREFIX} Get Repositories Success`),
  GET_REPOSITORIES_ERROR: type(`${ACTION_PREFIX} Get Repositories Error`),
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class GetRepositoriesRequestAction implements Action {
  type = ActionTypes.GET_REPOSITORIES_REQUEST;

  constructor(public payload?: any) {}
}

export class GetRepositoriesSuccessAction implements Action {
  type = ActionTypes.GET_REPOSITORIES_SUCCESS;

  constructor(public payload?: Repository[]) {}
}

export class GetRepositoriesErrorAction implements Action {
  type = ActionTypes.GET_REPOSITORIES_ERROR;

  constructor(public payload?: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = GetRepositoriesRequestAction
  | GetRepositoriesSuccessAction
  | GetRepositoriesErrorAction;
