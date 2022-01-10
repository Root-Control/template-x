import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Login, LoginFailure, LoginSuccess } from '../authentication.actions';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
	destroyed$ = new Subject();
	loginForm!: FormGroup;

	constructor(
		private readonly store: Store,
		private readonly actions$: Actions,
		private readonly formBuilder: FormBuilder,
		private readonly spinner: NgxSpinnerService
		) { }

	/**
	 * Initializing basic values for action and loginForm
	 */
	ngOnInit(): void {
		this.actions$
			.pipe(
				ofType(Login, LoginFailure, LoginSuccess),
				takeUntil(this.destroyed$)
			).subscribe(result => {
				switch (result.type) {
					case Login.type:
						
						this.spinner.show();
					break;
					case LoginFailure.type:
						this.spinner.hide();
					break;
					case LoginSuccess.type:
						this.spinner.hide();
					break;
				}
				
				
			})

		this.loginForm = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	/**
	 * Login for the user
	 */
	login(): void {
		this.loginForm.markAllAsTouched();
		
		if (this.loginForm.valid) {
			this.store.dispatch(Login({ credentials: this.loginForm.value }))
		}
	}


	ngAfterViewInit(): void {
		document.getElementById('main')?.classList.add("form-membership");
	}

	/**
	 * Destroying the component after component change
	 */
	ngOnDestroy(): void {
		this.destroyed$.next();
		this.destroyed$.complete();
	}
}
