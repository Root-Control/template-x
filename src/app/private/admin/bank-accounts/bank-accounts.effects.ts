import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as BankAccountsActions from './bank-accounts.actions';



@Injectable()
export class BankAccountsEffects {

  loadBankAccountss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(BankAccountsActions.loadBankAccountss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => BankAccountsActions.loadBankAccountssSuccess({ data })),
          catchError(error => of(BankAccountsActions.loadBankAccountssFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
