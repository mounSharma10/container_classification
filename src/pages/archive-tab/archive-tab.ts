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
