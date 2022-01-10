import { createAction, props } from '@ngrx/store';

export const loadTowerss = createAction(
  '[Towers] Load Towerss'
);

export const loadTowerssSuccess = createAction(
  '[Towers] Load Towerss Success',
  props<{ data: any }>()
);

export const loadTowerssFailure = createAction(
  '[Towers] Load Towerss Failure',
  props<{ error: any }>()
);
