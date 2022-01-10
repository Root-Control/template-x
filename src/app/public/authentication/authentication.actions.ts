import { createAction, props } from '@ngrx/store';
import { LoginCredentials } from './authentication.types';

export const Login = createAction('[Authentication] Login', props<{ credentials: LoginCredentials }>());
export const LoginSuccess = createAction('[Authentication] Login Success', props<{ accessToken: string }>());
export const LoginFailure = createAction('[Authentication] Login Failure',props<{ error: any }>());
