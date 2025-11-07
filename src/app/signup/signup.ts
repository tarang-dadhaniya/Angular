import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  model = { name: '', email: '', password: '' };
  successMessage = '';

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Signup data', this.model);
    this.successMessage = 'Account created (mock). Redirecting...';
    setTimeout(() => this.router.navigate(['/dashboard']), 1200);
  }
}