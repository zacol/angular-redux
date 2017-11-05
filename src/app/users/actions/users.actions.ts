import { Action } from '@ngrx/store';

import { type } from '../../utils';

const ACTION_PREFIX = '[Users]';

export const ActionTypes = {
  GET_USERS_REQUEST: type(`${ACTION_PREFIX} Get Users Request`),
  GET_USERS_SUCCESS: type(`${ACTION_PREFIX} Get Users Success`),
  GET_USERS_ERROR: type(`${ACTION_PREFIX} Get Users Error`),
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class GetUsersRequestAction implements Action {
  type = ActionTypes.GET_USERS_REQUEST;

  constructor(public payload?: any) {}
}

export class GetUsersSuccessAction implements Action {
  type = ActionTypes.GET_USERS_SUCCESS;

  constructor(public payload?: any) {}
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
