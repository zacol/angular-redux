import * as usersActions from '../actions/users.actions';

import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State {
  data: any;
  errors: any[];
  isFetching: boolean;
}

const initialState: State = {
  data: {},
  errors: [],
  isFetching: false,
};

export function reducer(state = initialState, action: usersActions.Actions): State {
  switch (action.type) {
    case usersActions.ActionTypes.GET_USERS_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case usersActions.ActionTypes.GET_USERS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    }

    case usersActions.ActionTypes.GET_USERS_ERROR: {
      return {
        ...state,
        errors: action.payload,
        isFetching: false,
      };
    }

    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const selectUsers = createFeatureSelector<State>('users');

export const selectUsersData = createSelector(
  selectUsers,
  (state: State) => state.data
);

export const selectUsersErrors = createSelector(
  selectUsers,
  (state: State) => state.errors
);

export const selectUsersIsFetching = createSelector(
  selectUsers,
  (state: State) => state.isFetching
);
