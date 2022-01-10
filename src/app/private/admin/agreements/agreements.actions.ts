import { createAction, props } from '@ngrx/store';

export const loadAgreementss = createAction(
  '[Agreements] Load Agreementss'
);

export const loadAgreementssSuccess = createAction(
  '[Agreements] Load Agreementss Success',
  props<{ data: any }>()
);

export const loadAgreementssFailure = createAction(
  '[Agreements] Load Agreementss Failure',
  props<{ error: any }>()
);
