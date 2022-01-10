import { createAction, props } from '@ngrx/store';

export const loadBankss = createAction(
  '[Banks] Load Bankss'
);

export const loadBankssSuccess = createAction(
  '[Banks] Load Bankss Success',
  props<{ data: any }>()
);

export const loadBankssFailure = createAction(
  '[Banks] Load Bankss Failure',
  props<{ error: any }>()
);
