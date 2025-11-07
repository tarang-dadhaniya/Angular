import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  // Minimal user info for header
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  // Cards to display in the main area
  cards = [
    { title: 'Profile', desc: 'Manage your account settings' },
    { title: 'Analytics', desc: 'View your analytics and reports' },
    { title: 'Settings', desc: 'Configure your preferences' },
    { title: 'Support', desc: 'Get help and support' }
  ];

  constructor(private router: Router) {}

  logout() {
    // Placeholder logout action: navigate back to login
    this.router.navigate(['/']);
  }
}