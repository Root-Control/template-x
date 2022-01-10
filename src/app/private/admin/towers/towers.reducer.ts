import { Action, createReducer, on } from '@ngrx/store';
import * as TowersActions from './towers.actions';

export const towersFeatureKey = 'towers';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(TowersActions.loadTowerss, state => state),
  on(TowersActions.loadTowerssSuccess, (state, action) => state),
  on(TowersActions.loadTowerssFailure, (state, action) => state),

);

