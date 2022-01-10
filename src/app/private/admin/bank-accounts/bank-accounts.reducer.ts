import { Action, createReducer, on } from '@ngrx/store';
import * as BankAccountsActions from './bank-accounts.actions';

export const bankAccountsFeatureKey = 'bankAccounts';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(BankAccountsActions.loadBankAccountss, state => state),
  on(BankAccountsActions.loadBankAccountssSuccess, (state, action) => state),
  on(BankAccountsActions.loadBankAccountssFailure, (state, action) => state),

);

