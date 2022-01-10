import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as ParkingsActions from './parkings.actions';



@Injectable()
export class ParkingsEffects {

  loadParkingss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(ParkingsActions.loadParkingss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => ParkingsActions.loadParkingssSuccess({ data })),
          catchError(error => of(ParkingsActions.loadParkingssFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
