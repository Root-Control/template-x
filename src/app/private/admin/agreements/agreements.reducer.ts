import { Action, createReducer, on } from '@ngrx/store';
import * as AgreementsActions from './agreements.actions';

export const agreementsFeatureKey = 'agreements';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(AgreementsActions.loadAgreementss, state => state),
  on(AgreementsActions.loadAgreementssSuccess, (state, action) => state),
  on(AgreementsActions.loadAgreementssFailure, (state, action) => state),

);

