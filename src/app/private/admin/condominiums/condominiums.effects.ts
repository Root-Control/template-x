import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as CondominiumsActions from './condominiums.actions';



@Injectable()
export class CondominiumsEffects {

  loadCondominiumss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CondominiumsActions.loadCondominiumss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CondominiumsActions.loadCondominiumssSuccess({ data })),
          catchError(error => of(CondominiumsActions.loadCondominiumssFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
