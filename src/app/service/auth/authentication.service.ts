import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticate_url: string = "http://127.0.0.1:8080/api/auth/login";

  constructor(private http: HttpClient) { }

  login(loginData: {usernameOrEmail: string, password: string}): Observable<boolean | null> {
    return this.http.post<any>(this.authenticate_url, loginData).pipe(
      map(response =>{
        const token = response.accessToken
        if (token){
          this.setToken(token);
          return true
        }
        return false
      }),
      catchError(this.handleError)
    );
  }

  getToken(): string | null{
    return localStorage.getItem("authToken")
  }

  setToken(token: string): void {
    localStorage.setItem("authToken", token)
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }

  logout(): void {
    localStorage.removeItem("authToken")
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend returned an unsuccessful response code
      if (error.status === 401) {
        errorMessage = 'User not found or invalid password!';
      }
    }
    return throwError(() => new Error(errorMessage));
  }
}
