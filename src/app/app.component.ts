import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  isLoggedIn = false;

  constructor(private userService: UserService, private router: Router) {}


  ngOnInit() {
    this.checkAuthentication();

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => this.checkAuthentication());
  }

  checkAuthentication() {
    const authenticatedUser = localStorage.getItem('authenticatedUser');

    this.isLoggedIn = !!authenticatedUser;
  }

  logout() {
    localStorage.removeItem('authenticatedUser');

    this.router.navigate(['/login']);
  }
}
