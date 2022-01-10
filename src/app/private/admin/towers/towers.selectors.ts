import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTowers from './towers.reducer';

export const selectTowersState = createFeatureSelector<fromTowers.State>(
  fromTowers.towersFeatureKey
);
