import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { Not404Component } from './pages/not404/not404.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: DashboardComponent },

  { path: 'not-404', component: Not404Component},
  { path: '**', redirectTo: 'not-404'}
];


