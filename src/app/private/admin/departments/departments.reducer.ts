import { Action, createReducer, on } from '@ngrx/store';
import * as DepartmentsActions from './departments.actions';

export const departmentsFeatureKey = 'departments';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(DepartmentsActions.loadDepartmentss, state => state),
  on(DepartmentsActions.loadDepartmentssSuccess, (state, action) => state),
  on(DepartmentsActions.loadDepartmentssFailure, (state, action) => state),

);

