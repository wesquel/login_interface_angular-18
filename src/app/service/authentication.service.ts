import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticate_url: string = "http://127.0.0.1:8080/api/auth/login";

  constructor(private http: HttpClient) { }

  authenticate(usernameOrEmail: string, password: string) {
    const loginData = {usernameOrEmail, password}
    console.log(usernameOrEmail, password)
    this.http.post(this.authenticate_url, loginData).subscribe(
      response => {
        return true;
      }, error => {
        return false;
      }
    )
  }

}
