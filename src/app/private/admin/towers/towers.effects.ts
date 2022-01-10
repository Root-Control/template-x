import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as TowersActions from './towers.actions';



@Injectable()
export class TowersEffects {

  loadTowerss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(TowersActions.loadTowerss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => TowersActions.loadTowerssSuccess({ data })),
          catchError(error => of(TowersActions.loadTowerssFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
