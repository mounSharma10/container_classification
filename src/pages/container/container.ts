import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonJson } from '../../app/shared/services/common-json';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-container',
  imports: [RouterLink, CommonModule, HttpClientModule],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export class Container {
  openContainerIndex: any = 'all';
  containersList: any = [];
 fileColors = [
  'linear-gradient(135deg, #FF6B6B, #FF8E53)',  // red
  'linear-gradient(135deg, #4D96FF, #6FA8FF)',  // blue
  'linear-gradient(135deg, #FFB84C, #FFD27F)',  // orange
  'linear-gradient(135deg, #9B59B6, #BE7ED9)',  // purple
  'linear-gradient(135deg, #2ECC71, #6CE39E)'   // green
];
  documents = [
    { type: 'PDF', iconClass: 'icon-pdf', previewIcon: 'far fa-file-pdf' },
    { type: 'DOC', iconClass: 'icon-doc', previewIcon: 'far fa-file-word' },
    { type: 'XLS', iconClass: 'icon-xls', previewIcon: 'far fa-file-excel' },
    { type: 'PPT', iconClass: 'icon-ppt', previewIcon: 'far fa-file-powerpoint' }
  ];
  commonService = inject(CommonJson);
  constructor() {
    this.getContainers();
  }
  getContainers() {
    this.commonService.getContainers().subscribe({
      next: (data) => {
        this.containersList = data;
      },
      error: (error) => { },
      complete: () => { }
    })
  }
  toggleAccordion(id: any) {

    if (this.openContainerIndex === id) {
      this.openContainerIndex = null; 
    } else {
      this.openContainerIndex = id; 
    }
  }
  viewDocument(doc: any) {
    alert(`Viewing ${doc.type} document`);
  }

  deleteDocument(index: number) {
    if (confirm('Delete this document?')) {
      this.documents.splice(index, 1);
    }
  }
  openFile(fileUrl: string) {
    window.open(fileUrl, '_blank');
  }

  openFileModal() {
    const modal = new (window as any).bootstrap.Modal(
      document.getElementById('filePreviewModal')
    );
    modal.show();
  }


}
