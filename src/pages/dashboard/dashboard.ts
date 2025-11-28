import { CommonModule } from '@angular/common';
import { Component , HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule ,RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
showFilter = false;

filters = {
  name: '',
  type: ''
};

toggleFilter() {
  this.showFilter = !this.showFilter;
}

applyFilter() {
  console.log('Filters:', this.filters);
  this.showFilter = false; // close after apply
}


}
