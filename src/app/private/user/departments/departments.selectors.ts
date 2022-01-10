import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDepartments from './departments.reducer';

export const selectDepartmentsState = createFeatureSelector<fromDepartments.State>(
  fromDepartments.departmentsFeatureKey
);
