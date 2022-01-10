import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBanks from './banks.reducer';

export const selectBanksState = createFeatureSelector<fromBanks.State>(
  fromBanks.banksFeatureKey
);
