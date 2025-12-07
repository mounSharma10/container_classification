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
    {
      id: 'CON982345671',
      count: 4,
      blNo: 'BL-IND-45890021',
      origin: 'Nhava Sheva',
      destination: 'Rotterdam',
      vessel: 'Sea Dragon',
      date: '05-02-2025',
      berencourtRef: 'BCW-982345'   
    },
    {
      id: 'CON774512990',
      count: 1,
      blNo: 'HAPAG-BL-998877',
      origin: 'Kolkata',
      destination: 'Hamburg',
      vessel: 'Nordic Pearl',
      date: '18-01-2025',
      berencourtRef: null         
    },
    {
      id: 'CON563214772',
      count: 3,
      blNo: 'MAERSK-BL-563214',
      origin: 'Chennai',
      destination: 'Jebel Ali',
      vessel: 'Ocean Titan',
      date: '22-02-2025',
      berencourtRef: null           
    },
    {
      id: 'CON334455889',
      count: 2,
      blNo: 'COSCO-BL-334455',
      origin: 'Mumbai',
      destination: 'Bangkok',
      vessel: 'Pacific Storm',
      date: '10-03-2025',
      berencourtRef: null          
    },
    {
      id: 'CON998877665',
      count: 4,
      blNo: 'MSC-BL-66554433',
      origin: 'Visakhapatnam',
      destination: 'London',
      vessel: 'Royal Navigator',
      date: '28-02-2025',
      berencourtRef: 'BCW-998877'  
    }
  ];

  //
  isDropdownOpen = false;

  items = ["Client 1", "Client 2", "Client 3", "Client 4", "Client 5"];
  selectedItem: string = "";

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectItem(item: string) {
    this.selectedItem = item;
    this.isDropdownOpen = false;
  }
  //

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  applyFilter() {
    console.log(this.filters);
    this.showFilter = false;
  }

}
