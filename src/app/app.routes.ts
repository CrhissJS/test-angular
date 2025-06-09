import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { authRoutes } from './auth/auth.routes';

export const routes: Routes = [
  { path: '', component: ListComponent },
  ...authRoutes
];
