import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticate_url: string = "http://127.0.0.1:8080/api/auth/login";

  constructor(private http: HttpClient) { }

  authenticate(usernameOrEmail: string, password: string): Observable<boolean> {
    const loginData = { usernameOrEmail, password };
    return this.http.post(this.authenticate_url, loginData).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
