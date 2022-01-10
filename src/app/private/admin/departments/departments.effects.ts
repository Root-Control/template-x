import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as DepartmentsActions from './departments.actions';



@Injectable()
export class DepartmentsEffects {

  loadDepartmentss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(DepartmentsActions.loadDepartmentss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => DepartmentsActions.loadDepartmentssSuccess({ data })),
          catchError(error => of(DepartmentsActions.loadDepartmentssFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
