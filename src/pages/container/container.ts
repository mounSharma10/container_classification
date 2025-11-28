import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-container',
  imports: [RouterLink],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export class Container {
  openContainerIndex:any=null;
  documents = [
    { type: 'PDF', iconClass: 'icon-pdf', previewIcon: 'far fa-file-pdf' },
    { type: 'DOC', iconClass: 'icon-doc', previewIcon: 'far fa-file-word' },
    { type: 'XLS', iconClass: 'icon-xls', previewIcon: 'far fa-file-excel' },
    { type: 'PPT', iconClass: 'icon-ppt', previewIcon: 'far fa-file-powerpoint' }
  ];

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
