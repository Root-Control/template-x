import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as BanksActions from './banks.actions';



@Injectable()
export class BanksEffects {

  loadBankss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(BanksActions.loadBankss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => BanksActions.loadBankssSuccess({ data })),
          catchError(error => of(BanksActions.loadBankssFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
