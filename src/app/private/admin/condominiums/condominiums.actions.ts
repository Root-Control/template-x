import { createAction, props } from '@ngrx/store';

export const loadCondominiumss = createAction(
  '[Condominiums] Load Condominiumss'
);

export const loadCondominiumssSuccess = createAction(
  '[Condominiums] Load Condominiumss Success',
  props<{ data: any }>()
);

export const loadCondominiumssFailure = createAction(
  '[Condominiums] Load Condominiumss Failure',
  props<{ error: any }>()
);
