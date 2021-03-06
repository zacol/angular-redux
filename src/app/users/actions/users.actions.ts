import { Action } from '@ngrx/store';

import { type } from '../../utils';

import { User } from '../models/users.models';

const ACTION_PREFIX = '[Users]';

export const ActionTypes = {
  GET_USERS_REQUEST: type(`${ACTION_PREFIX} Get Users Request`),
  GET_USERS_SUCCESS: type(`${ACTION_PREFIX} Get Users Success`),
  GET_USERS_ERROR: type(`${ACTION_PREFIX} Get Users Error`),
};

export class GetUsersRequestAction implements Action {
  type = ActionTypes.GET_USERS_REQUEST;

  constructor(public payload?: any) {}
}

export class GetUsersSuccessAction implements Action {
  type = ActionTypes.GET_USERS_SUCCESS;

  constructor(public payload?: User[]) {}
}

export class GetUsersErrorAction implements Action {
  type = ActionTypes.GET_USERS_ERROR;

  constructor(public payload?: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = GetUsersRequestAction
  | GetUsersSuccessAction
  | GetUsersErrorAction;
