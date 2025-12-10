import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Pagination } from '../../shared/components/pagination/pagination';
import { CommonJson } from '../../app/shared/services/common-json';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, RouterModule, Pagination],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  showFilter = false;
  commonService = inject(CommonJson);

  filters = {
    name: '',
    type: '',
  };

  headers: any = signal([]);
  rows: any = [];

  isDropdownOpen = false;
  items = ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5'];
  selectedItem: string = '';
  visibleCols: any[] = [];
  visibleHeaders: any = computed(() => this.headers().filter((h: any) => h.isVisible));
  visibleCount: any = computed(() => this.headers().filter((h: any) => h.isVisible).length);
  showFilterModal: boolean = false;
  docTypes = ['BOL', 'Invoice', 'Packing List', 'Certificate'];
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
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectItem(item: string) {
    this.selectedItem = item;
    this.isDropdownOpen = false;
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  applyFilter() {
    console.log(this.filters);
    this.showFilter = false;
  }

  toggleVisibility() {
    if (this.headers().filter((x: any) => x.isVisible).length > 10) {
      return;
    }
    this.headers.update((cols: any) =>
      cols.map((col: any) => (col.isVisible === true ? { ...col } : col))
    );
    this.showFilterModal = false;
  }
  getCellValue(row: Record<string, any>, key: string): string {
    const value = row[key];
    return value ?? '-';
  }
  getDocClass(docList: string[] | string, doc: string) {
    if (!docList) return 'red';

    return docList.includes(doc) ? 'green' : 'red';
  }
}
