import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-doc-panel',
  imports: [RouterModule],
  templateUrl: './doc-panel.html',
  styleUrl: './doc-panel.scss',
})
export class DocPanel {
openFileModal() {
  const modal = new (window as any).bootstrap.Modal(
    document.getElementById('filePreviewModal')
  );
  modal.show();
}
}
