import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  // Get users from local storage
  getAllUsersFromStorage(): User[] {
    const usersStored = localStorage.getItem('users');
    return usersStored ? JSON.parse(usersStored) : [];
  }

  // Save users to local storage
  saveUsersToStorage(users: User[]) {
    const usersString = JSON.stringify(users);

    localStorage.setItem('users', usersString);
  }

  // Add user to local storage data by pushing it
  addUser(user: User) {
    const users = this.getAllUsersFromStorage();
    users.push(user);
    this.saveUsersToStorage(users);
  }

  // Get users from API and merge with local storage data
  getApiUserAndMergeWithStorageData(): Observable<User[]> {
     return this.http.get<User[]>(this.apiUrl).pipe(
      map(apiUsers => {
        const localStorageUsers = JSON.parse(localStorage.getItem('users') || '[]');
        return [...apiUsers, ...localStorageUsers];
      })
    );
  }

  // Login
  login(email: string, password: string): User | null {
    const users = [...this.getAllUsersFromStorage()];

    // Find user by name or email
    const foundUser = users.find(user => user.email === email && user.password === password);

    return foundUser || null;
  }
}