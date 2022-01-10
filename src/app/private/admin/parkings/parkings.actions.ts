import { createAction, props } from '@ngrx/store';

export const loadParkingss = createAction(
  '[Parkings] Load Parkingss'
);

export const loadParkingssSuccess = createAction(
  '[Parkings] Load Parkingss Success',
  props<{ data: any }>()
);

export const loadParkingssFailure = createAction(
  '[Parkings] Load Parkingss Failure',
  props<{ error: any }>()
);
