import { Action, createReducer, on } from '@ngrx/store';
import * as BanksActions from './banks.actions';

export const banksFeatureKey = 'banks';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(BanksActions.loadBankss, state => state),
  on(BanksActions.loadBankssSuccess, (state, action) => state),
  on(BanksActions.loadBankssFailure, (state, action) => state),

);

