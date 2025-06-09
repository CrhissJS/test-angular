import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  name = '';
  username = '';
  email = '';
  phone = ''
  companyName = '';
  password = '';

  constructor(private userService: UserService, private router: Router) { }

  register() {
    const newUser = { 
      id: Date.now().toString(),
      name: this.name,
      username: this.username,
      address: {
        street: "test-street",
        suite: "test-suite",
        city: "test-city",
        zipcode: "test-zipcode",
        geo: {
          lat: "test-lat",
          lng: "test-lng"
        }
      },
      email: this.email,
      phone: this.phone,
      password: this.password,
      website: 'test-website',
      company: {
        name: this.companyName,
        catchPhrase: "test-catchPhrase",
        bs: "test-bs"
      }
    };

    this.userService.addUser(newUser);

    this.router.navigate(['/login']);
  }
}
