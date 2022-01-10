import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCondominiums from './condominiums.reducer';

export const selectCondominiumsState = createFeatureSelector<fromCondominiums.State>(
  fromCondominiums.condominiumsFeatureKey
);
