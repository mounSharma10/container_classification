import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TimeLine } from "../../shared/components/time-line/time-line";

@Component({
  selector: 'app-doc-panel',
  standalone: true,
  imports: [CommonModule, RouterModule, TimeLine],
  
  templateUrl: './doc-panel.html',
  styleUrl: './doc-panel.scss',
})
export class DocPanel {

  documentCount = 0;
  fileColors = [
    'linear-gradient(135deg, #FF6B6B, #FF8E53)',
    'linear-gradient(135deg, #4D96FF, #6FA8FF)',
    'linear-gradient(135deg, #FFB84C, #FFD27F)',
    'linear-gradient(135deg, #9B59B6, #BE7ED9)',
    'linear-gradient(135deg, #2ECC71, #6CE39E)'
  ];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.documentCount = +params['count'];
    });
  }

  openFileModal() {
    const modal = new (window as any).bootstrap.Modal(
      document.getElementById('filePreviewModal')
    );
    modal.show();
  }

  documents = [
    {
      fileName: "BOL.pdf",
      documentType: "BILL OF LADING",
      fileType: "bol"
    },
    {
      fileName: "Invoice.pdf",
      documentType: "INVOICE",
      fileType: "invoice"
    },
    {
      fileName: "Packing_List.pdf",
      documentType: "PACKING LIST",
      fileType: "packing"
    },
    {
      fileName: "Phytosanitary Certificate.pdf",
      documentType: "CERTIFICATE",
      fileType: "phytosanitary"
    }
  ];

}
