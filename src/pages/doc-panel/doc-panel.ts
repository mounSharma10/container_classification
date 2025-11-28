import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doc-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './doc-panel.html',
  styleUrl: './doc-panel.scss',
})
export class DocPanel {

  documentCount = 0;

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
}
