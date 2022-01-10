import { createAction, props } from '@ngrx/store';

export const loadGroupss = createAction(
  '[Groups] Load Groupss'
);

export const loadGroupssSuccess = createAction(
  '[Groups] Load Groupss Success',
  props<{ data: any }>()
);

export const loadGroupssFailure = createAction(
  '[Groups] Load Groupss Failure',
  props<{ error: any }>()
);
