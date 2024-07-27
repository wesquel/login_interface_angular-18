import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../service/auth/authentication.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  errorMessage: string | null = null;

  constructor(private authService: AuthenticationService, private router: Router) {}

  onSubmit():void {

    const loginData = { usernameOrEmail: this.username, password: this.password };

    this.authService.login(loginData).subscribe({
      next: (isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Invalid login credentials!';
        }
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });

  }
}
