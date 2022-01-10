import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBankAccounts from './bank-accounts.reducer';

export const selectBankAccountsState = createFeatureSelector<fromBankAccounts.State>(
  fromBankAccounts.bankAccountsFeatureKey
);
