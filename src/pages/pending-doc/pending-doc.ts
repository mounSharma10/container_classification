import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonJson } from '../../app/shared/services/common-json';
import { CommonModule } from '@angular/common';
import { Pagination } from '../../shared/components/pagination/pagination';

@Component({
  selector: 'app-pending-doc',
  imports: [RouterModule, CommonModule, Pagination],
  templateUrl: './pending-doc.html',
  styleUrl: './pending-doc.scss',
})

export class PendingDoc {

  headers: any = signal([]);
  rows: any = [];

  commonService = inject(CommonJson);
  constructor(){
   this.getTableHeader();
    this.getTableData();
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

pandingDocs = 
[
  {
    "fileName": "NLDIndia.pdf",
    "status": "Review Pending",
    "source": "API",
    "action": "Review",

  },
  {
    "fileName": "Dummy_Document.pdf",
    "status": "Review Pending",
    "source": "Email",
    "action": "Review",

  },
  {
    "fileName": "testdocument.pdf",
    "status": "Review Pending",
    "source": "Email",
    "action": "Review",
  },
  {
    "fileName": "document.pdf",
    "status": "Review Pending",
    "source": "API",
    "action": "Review",
  },
  {
    "fileName": "test.pdf",
    "status": "Review Pending",
    "source": "Email",
    "action": "Review",
  }
]

}