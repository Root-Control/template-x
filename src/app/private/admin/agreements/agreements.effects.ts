import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as AgreementsActions from './agreements.actions';



@Injectable()
export class AgreementsEffects {

  loadAgreementss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(AgreementsActions.loadAgreementss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AgreementsActions.loadAgreementssSuccess({ data })),
          catchError(error => of(AgreementsActions.loadAgreementssFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
