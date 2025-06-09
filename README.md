# TestAngular – Angular Technical Test

This project was built as part of a technical assessment for a Senior Angular Developer role. It consumes a public API to display a user dashboard and includes a basic local authentication system using `localStorage`.

---

## 🧱 Technologies Used

- Angular 19 (standalone components)
- TypeScript
- RxJS
- HTML/CSS
- LocalStorage API (no backend)

---

## 🚀 Key Features

✅ Dashboard with user table fetched from `https://jsonplaceholder.typicode.com/users`  
✅ Dynamic search by name  
✅ Local user registration (with password)  
✅ Login with validation using local storage  
✅ Session control with dynamic Login / Logout button  
✅ Header + Sidebar + Main Content layout  
✅ Basic responsive design with custom styles

---

## 📂 Project Structure

```
src/app/
├── auth/            # Auth module (login/register)
├── list/       # User table
├── services/        # Business logic (UserService)
├── interfaces/      # User model typing
├── assets/          # Logo SVG and static resources
```

---

## 🧪 How to Run the Project

### Requirements:

- Node.js 18+
- Angular CLI globally installed (`npm install -g @angular/cli`)

### Instructions:

```bash
git clone https://github.com/CrhissJS/test-angular.git
cd test-angular
npm install
ng serve
```

Open your browser at: `http://localhost:4200/`

---

## 🛠 Production Build

```bash
ng build --configuration production
```

Compiled files will be in `dist/test-angular`.

---

## 🔐 About Authentication

- Initial users are loaded from the public API.
- New users are saved locally via `localStorage`.
- Logged-in user is stored as `authenticatedUser` in local storage.
- Logout clears session and redirects to login.

---

## 📌 Final Notes

This project was built as part of a technical challenge. It can be easily extended with route guards, backend integration, and unit testing.

---
