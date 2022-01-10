import { createAction, props } from '@ngrx/store';

export const loadDepartmentss = createAction(
  '[Departments] Load Departmentss'
);

export const loadDepartmentssSuccess = createAction(
  '[Departments] Load Departmentss Success',
  props<{ data: any }>()
);

export const loadDepartmentssFailure = createAction(
  '[Departments] Load Departmentss Failure',
  props<{ error: any }>()
);
