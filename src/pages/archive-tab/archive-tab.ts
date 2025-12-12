import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pagination } from '../../shared/components/pagination/pagination';
import { CommonJson } from '../../app/shared/services/common-json';

@Component({
  selector: 'app-archive-tab',
  imports: [RouterModule, CommonModule, Pagination],
  templateUrl: './archive-tab.html',
  styleUrls: ['./archive-tab.scss'],
})
export class ArchiveTab {
  headers: any = signal([]);
  rows: any = [];
  visibleCols: any[] = [];
  visibleHeaders: any = computed(() => this.headers().filter((h: any) => h.isVisible));
  commonService = inject(CommonJson);

  constructor() {
    this.getTableHeader();
    this.getTableData();
    effect(() => {
      this.visibleCols = this.headers().filter((h: any) => h.isVisible);
    });
  }

  getTableHeader() {
    this.commonService.getTableHeader().subscribe({
      next: (data: any) => {
        this.headers.set(data);
      },
      error: (error) => {},
      complete: () => {},
    });
  }
  getTableData() {
    this.commonService.getTableData().subscribe({
      next: (data: any) => {
        this.rows = data;
      },
      error: (error) => {},
      complete: () => {},
    });
  }
  header = [
    { key: 'id', label: 'Container ID', isVisible: true },
    { key: 'blNo', label: 'BOL', isVisible: true },
    { key: 'vessel', label: 'Vessel Name', isVisible: true },
    { key: 'origin', label: 'Origin', isVisible: true },
    { key: 'destination', label: 'Destination', isVisible: true },
    { key: 'reference', label: 'Reference', isVisible: true },
  ];
containers = [
  {
    id: 'CON982345671',
    blNo: 'BL-IND-45890021',
    vessel: 'Sea Dragon',
    origin: 'Nhava Sheva',
    destination: 'Rotterdam',
    reference: 'BCW-982345',
  },
  {
    id: 'CON774512990',
    blNo: 'HAPAG-BL-998877',
    vessel: 'Nordic Pearl',
    origin: 'Kolkata',
    destination: 'Hamburg',
    reference: 'BCW-9823456',
  },
  {
    id: 'CON563214772',
    blNo: 'MAERSK-BL-563214',
    vessel: 'Ocean Titan',
    origin: 'Chennai',
    destination: 'Jebel Ali',
    reference: 'BCW-563214',
  },
  {
    id: 'CON334455889',
    blNo: 'COSCO-BL-334455',
    vessel: 'Pacific Storm',
    origin: 'Mumbai',
    destination: 'Bangkok',
    reference: 'BCW-334455',
  },
  {
    id: 'CON998877665',
    blNo: 'MSC-BL-66554433',
    vessel: 'Royal Navigator',
    origin: 'Visakhapatnam',
    destination: 'London',
    reference: 'BCW-998877',
  },

  // ---------------- NEW ADDED DATA ---------------- //

  {
    id: 'CON112233445',
    blNo: 'HLCU-BL-112233',
    vessel: 'Ocean Breeze',
    origin: 'Cochin',
    destination: 'Singapore',
    reference: 'BCW-112233',
  },
  {
    id: 'CON556677889',
    blNo: 'MAEU-BL-556677',
    vessel: 'Maersk Horizon',
    origin: 'Tuticorin',
    destination: 'Dubai',
    reference: 'BCW-556677',
  },
  {
    id: 'CON223344556',
    blNo: 'CMAU-BL-987654',
    vessel: 'CMA Lotus',
    origin: 'Kandla',
    destination: 'Antwerp',
    reference: 'BCW-987654',
  },
  {
    id: 'CON665544778',
    blNo: 'ONE-BL-445566',
    vessel: 'ONE Sakura',
    origin: 'Mundra',
    destination: 'Port Klang',
    reference: 'BCW-445566',
  },
  {
    id: 'CON884422110',
    blNo: 'COSCO-BL-778899',
    vessel: 'Cosco Neptune',
    origin: 'Mangalore',
    destination: 'Doha',
    reference: 'BCW-778899',
  },
  {
    id: 'CON116688229',
    blNo: 'EMCU-BL-226688',
    vessel: 'Emerald Wave',
    origin: 'Chennai',
    destination: 'Colombo',
    reference: 'BCW-226688',
  },
  {
    id: 'CON443322119',
    blNo: 'MSC-BL-887766',
    vessel: 'MSC Horizon',
    origin: 'Nhava Sheva',
    destination: 'New York',
    reference: 'BCW-887766',
  },
  {
    id: 'CON551199334',
    blNo: 'HAPAG-BL-552211',
    vessel: 'Hapag Orion',
    origin: 'Kolkata',
    destination: 'Oslo',
    reference: 'BCW-552211',
  },
  {
    id: 'CON229911447',
    blNo: 'MAEU-BL-441199',
    vessel: 'Maersk Titan',
    origin: 'Vizag',
    destination: 'Sydney',
    reference: 'BCW-441199',
  },
  {
    id: 'CON998812334',
    blNo: 'CMAU-BL-663322',
    vessel: 'CMA Galaxy',
    origin: 'Kochi',
    destination: 'Shanghai',
    reference: 'BCW-663322',
  },
  {
    id: 'CON774455221',
    blNo: 'ONE-BL-335577',
    vessel: 'ONE Infinity',
    origin: 'Mumbai',
    destination: 'Durban',
    reference: 'BCW-335577',
  },
  {
    id: 'CON887766554',
    blNo: 'MSC-BL-766554',
    vessel: 'MSC Valencia',
    origin: 'Mundra',
    destination: 'Barcelona',
    reference: 'BCW-766554',
  }
];


  isDropdownOpen = false;

  items = ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5'];
  selectedItem: string = '';

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectItem(item: string) {
    this.selectedItem = item;
    this.isDropdownOpen = false;
  }

  getCellValue(row: Record<string, any>, key: string): string {
    const value = row[key];
    return value ?? '-';
  }
}
