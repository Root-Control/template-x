import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAgreements from './agreements.reducer';

export const selectAgreementsState = createFeatureSelector<fromAgreements.State>(
  fromAgreements.agreementsFeatureKey
);
