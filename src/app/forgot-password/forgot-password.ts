import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  email = '';
  successMessage = '';

  onSubmit() {
    // Mock password reset flow
    console.log('Password reset requested for:', this.email);
    this.successMessage = 'Password reset link sent! Please check your email.';
  }
}