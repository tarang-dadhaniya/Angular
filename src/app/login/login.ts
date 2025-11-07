import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  model = { email: '', password: '' };
  successMessage = '';

  constructor(private router: Router) {}

  onSubmit() {
    // No validation required per request — navigate to dashboard
    console.log('Submitted login', this.model);
    // Navigate to dashboard
    this.router.navigate(['/dashboard']);
  }
}
