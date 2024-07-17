import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor (private authService: AuthenticationService) {}

  onSubmit(){
    this.authService.authenticate(this.username, this.password)
  }

}
