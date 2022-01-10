import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginCredentials, LoginResponse } from './authentication.types';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    path: string = environment.basepath;
    constructor(private readonly http: HttpClient) { }

    login(credentials: LoginCredentials): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.path}/auth/signin`, credentials);
    }
}
