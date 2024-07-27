import { Component } from '@angular/core';
import { AuthenticationService } from '../../service/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private authService: AuthenticationService, private router: Router) {}

  logoutSubmit():void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
