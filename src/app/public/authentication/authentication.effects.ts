import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { Login, LoginSuccess, LoginFailure } from './authentication.actions';
import { LoginResponse } from './authentication.types';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class AuthenticationEffects {

	login$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(Login),
			concatMap(action =>
				this.authenticationService.login(action.credentials)
					.pipe(
						map((response: LoginResponse) => LoginSuccess({ accessToken: response.accessToken })),
						catchError(error => of(LoginFailure({ error }))))
			)
		);
	});



	constructor(
		private actions$: Actions,
		private readonly authenticationService: AuthenticationService) { }

}
