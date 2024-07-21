import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  constructor(private authService: AuthenticationService) {}

  async onSubmit() {
    try {
      const isAuthenticated = await firstValueFrom(this.authService.authenticate(this.username, this.password));
      if (isAuthenticated) {
        alert('Authentication successful');
      } else {
        alert('Authentication failed');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  }
}
