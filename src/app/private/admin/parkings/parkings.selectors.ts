import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromParkings from './parkings.reducer';

export const selectParkingsState = createFeatureSelector<fromParkings.State>(
  fromParkings.parkingsFeatureKey
);
