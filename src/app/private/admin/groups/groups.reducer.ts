import { Action, createReducer, on } from '@ngrx/store';
import * as GroupsActions from './groups.actions';

export const groupsFeatureKey = 'groups';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(GroupsActions.loadGroupss, state => state),
  on(GroupsActions.loadGroupssSuccess, (state, action) => state),
  on(GroupsActions.loadGroupssFailure, (state, action) => state),

);

