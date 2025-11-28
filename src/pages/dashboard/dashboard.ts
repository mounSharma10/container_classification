import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  showFilter = false;

  filters = {
    name: '',
    type: ''
  };

  containers = [
    { id: 'CON126677551', count: 4, status: 'Active', date: '12-01-2025' },
    { id: 'CON126677556', count: 2, status: 'Pending', date: '12-01-2025' },
    { id: 'CON126677555', count: 3, status: 'Active', date: '12-01-2025' },
    { id: 'CON126676657', count: 1, status: 'Archived', date: '12-01-2025' },
    { id: 'CON126677999', count: 4, status: 'Active', date: '22-08-2025' }
  ];

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  applyFilter() {
    console.log(this.filters);
    this.showFilter = false;
  }
}
