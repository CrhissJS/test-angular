import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user.interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchValue: string = '';
  
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    // Check if user is authenticated
    const authenticatedUser = localStorage.getItem('authenticatedUser');

    if (!authenticatedUser) {
      this.router.navigate(['/login']);
    }

    this.userService.getApiUserAndMergeWithStorageData().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
    });

    console.log(this.users);
  }

  onSearch() {
    this.filteredUsers = this.users.filter(user => 
      user.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }
}
