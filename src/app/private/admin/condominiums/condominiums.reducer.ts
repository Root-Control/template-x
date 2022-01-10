import { Action, createReducer, on } from '@ngrx/store';
import * as CondominiumsActions from './condominiums.actions';

export const condominiumsFeatureKey = 'condominiums';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(CondominiumsActions.loadCondominiumss, state => state),
  on(CondominiumsActions.loadCondominiumssSuccess, (state, action) => state),
  on(CondominiumsActions.loadCondominiumssFailure, (state, action) => state),

);

