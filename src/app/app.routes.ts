import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ForgotPassword } from './forgot-password/forgot-password';
import { Dashboard } from './dashboard/dashboard';
import { Signup } from './signup/signup';

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'forgot-password', component: ForgotPassword },
    { path: 'dashboard', component: Dashboard },
    { path: 'signup', component: Signup },
];