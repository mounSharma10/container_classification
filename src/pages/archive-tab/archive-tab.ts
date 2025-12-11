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

  containers = [
    {
      id: 'CON982345671',
      count: 4,
      blNo: 'BL-IND-45890021',
      origin: 'Nhava Sheva',
      destination: 'Rotterdam',
      vessel: 'Sea Dragon',
      date: '05-02-2025',
      berencourtRef: 'BCW-982345',
    },
    {
      id: 'CON774512990',
      count: 1,
      blNo: 'HAPAG-BL-998877',
      origin: 'Kolkata',
      destination: 'Hamburg',
      vessel: 'Nordic Pearl',
      date: '18-01-2025',
      berencourtRef: null,
    },
    {
      id: 'CON563214772',
      count: 3,
      blNo: 'MAERSK-BL-563214',
      origin: 'Chennai',
      destination: 'Jebel Ali',
      vessel: 'Ocean Titan',
      date: '22-02-2025',
      berencourtRef: null,
    },
    {
      id: 'CON334455889',
      count: 2,
      blNo: 'COSCO-BL-334455',
      origin: 'Mumbai',
      destination: 'Bangkok',
      vessel: 'Pacific Storm',
      date: '10-03-2025',
      berencourtRef: null,
    },
    {
      id: 'CON998877665',
      count: 4,
      blNo: 'MSC-BL-66554433',
      origin: 'Visakhapatnam',
      destination: 'London',
      vessel: 'Royal Navigator',
      date: '28-02-2025',
      berencourtRef: 'BCW-998877',
    },
  ];
  //
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
