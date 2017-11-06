import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as repositoriesActions from '../actions/repositories.actions';

import { Repository } from '../models/repositories.models';

export interface State {
  data: Repository[];
  errors: any[];
  isFetching: boolean;
}

const initialState: State = {
  data: [],
  errors: [],
  isFetching: false,
};

export function reducer(state = initialState, action: repositoriesActions.Actions): State {
  switch (action.type) {
    case repositoriesActions.ActionTypes.GET_REPOSITORIES_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case repositoriesActions.ActionTypes.GET_REPOSITORIES_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    }

    case repositoriesActions.ActionTypes.GET_REPOSITORIES_ERROR: {
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

export const selectRepositories = createFeatureSelector<State>('repositories');

export const selectRepositoriesData = createSelector(
  selectRepositories,
  (state: State) => state.data
);

export const selectRepositoriesErrors = createSelector(
  selectRepositories,
  (state: State) => state.errors
);

export const selectRepositoriesIsFetching = createSelector(
  selectRepositories,
  (state: State) => state.isFetching
);

