import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as GroupsActions from './groups.actions';



@Injectable()
export class GroupsEffects {

  loadGroupss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(GroupsActions.loadGroupss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => GroupsActions.loadGroupssSuccess({ data })),
          catchError(error => of(GroupsActions.loadGroupssFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
