import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) { }

  login() {
    const user = this.userService.login(this.email, this.password);

    if (user) {
      localStorage.setItem('authenticatedUser', JSON.stringify(user));

      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
