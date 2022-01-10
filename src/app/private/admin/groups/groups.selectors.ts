import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGroups from './groups.reducer';

export const selectGroupsState = createFeatureSelector<fromGroups.State>(
  fromGroups.groupsFeatureKey
);
