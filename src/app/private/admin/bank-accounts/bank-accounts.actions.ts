import { createAction, props } from '@ngrx/store';

export const loadBankAccountss = createAction(
  '[BankAccounts] Load BankAccountss'
);

export const loadBankAccountssSuccess = createAction(
  '[BankAccounts] Load BankAccountss Success',
  props<{ data: any }>()
);

export const loadBankAccountssFailure = createAction(
  '[BankAccounts] Load BankAccountss Failure',
  props<{ error: any }>()
);
